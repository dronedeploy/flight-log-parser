import parse from 'csv-parse';

import { FlightLogRow, FlightLogHeader, FlightLogMetaData, FlightLog, FlightLogEvent } from './types';
import { INT_FIELDS, BOOL_FIELDS, FLOAT_FIELDS, DATE_FIELDS } from './field-types';

const syncParse = require('csv-parse/lib/sync');


const META_REGEX = {
  appVersion: /^#DroneDeploy\s+(.+)$/,
  sessionId: /^Session ID\s+(.+)$/,
  sessionStart: /^Session Start\s+(.+)$/,
  sessionEnd: /^Date\/Time \(UTC\)\s+(.+)$/,
  deviceModel: /^Device Model\s+(.+)$/,
  deviceOS: /^Device Operating System\s+(.+)$/,
  aircraftModel: /^Aircraft Model\s+(.+)$/,
  aircraftName: /^Aircraft Name\s+(.+)$/,
  aircraftFirmware: /^Aircraft Firmware\s+(.+)$/,
  batteryChargeVolume: /^Full Charge Volume \(mAh\)\s+(.+)$/,
  batteryRemainingLife: /^Remaining Life \(%\)\s+(.+)$/,
  batteryDischarges: /^Discharges\s+(.+)$/,
  batteryCells: /^Battery Cells Number\s+(.+)$/,
  batterySerialNumber: /^Battery Serial Number\s+(.+)$/,
  batteryFirmware: /^Battery Firmware\s+(.+)$/,
  fcSerialNumber: /^Flight Controller Serial Number\s+(.+)$/,
  fcFirmware: /^Flight Controller Firmware\s+(.+)$/,
  footerLines: /^#Flight Recorder Session End|^Date\/Time \(UTC\)|^Elapsed Time \(sec\)/,
  gimbalFirmware: /^Gimbal Firmware\s+(.+)$/,
  rcSerialNumber: /^Remote Control Serial Number\s+(.+)$/,
  rcFirmware: /^Remote Control Firmware\s+(.+)$/,
  cameraSerialNumber: /^Camera Serial Number\s+(.+)$/,
  elapsedTime: /^Elapsed Time \(sec\)\s+(.+)$/,
  userId: /^User ID\s+(.+)$/,
  organizationId: /^Organization ID\s+(.+)$/,
  platform: /^Platform\s+(.+)$/,
};

export type Subscriber<T> = (value: T) => void;
export type ErrorSubscriber = (value: any) => void;
export type CompletionSubscriber = () => void;

export interface QuasiObservable<T> {
    subscribe(sub: Subscriber<T>, errSub?: ErrorSubscriber, completionSub?: CompletionSubscriber): void;
    toPromise(): Promise<T>;
}

export class QuasiSubject<T> implements QuasiObservable<T> {
    private subscribers: Subscriber<T>[] = [];
    private errorSubscribers: ErrorSubscriber[] = [];
    private completionSubscribers: CompletionSubscriber[] = [];
    private isFinished = false;

    next(value: T) {
        if (this.isFinished) {
            return;
        }
        this.subscribers.forEach((s) => s(value));
    }

    complete() {
        if (this.isFinished) {
            return;
        }
        this.isFinished = true;
        this.completionSubscribers.forEach((sub) => sub());
    }

    error(error: any) {
        if (this.isFinished) {
            return;
        }
        this.errorSubscribers.forEach((errSub) => errSub(error));
        this.complete();
    }

    subscribe(sub: Subscriber<T>, errSub?: ErrorSubscriber, completionSub?: CompletionSubscriber) {
        this.subscribers.push(sub);
        if (errSub) {
            this.errorSubscribers.push(errSub);
        }
        if (completionSub) {
            this.completionSubscribers.push(completionSub);
        }
    }

    toPromise(): Promise<T> {
        const source = this;
        return new Promise<T>(function (resolve, reject) {
            let value: T;
            source.subscribe(function (v) {
                value = v;
            }, reject, function () {
                resolve(value);
            });
        });
    }
}

export function parseLogStream(logStream: QuasiSubject<string>): QuasiObservable<FlightLogEvent> {
  const headerMetaLines: string[] = [];
  let meta = {} as FlightLogMetaData;
  let rowHeaderLine: string;
  let row: FlightLogRow;

  const progress = { index: 0, completed: false };
  let end: any;
  const result = new QuasiSubject<FlightLogEvent>();

  logStream.subscribe((line: string) => {
    line = line.trim();
    if (!line.length) {
      return;
    }

    if (!rowHeaderLine) {
      if (line.startsWith(FlightLogHeader.DateTime.split(' ')[0])) {  // Strip off timezone.
        rowHeaderLine = line;
        meta = parseMetaData(headerMetaLines, []);
        result.next({
          meta,
          rowIndex: progress.index
        });
      } else {
        headerMetaLines.push(line);
        progress.index++;
      }
      return;
    }

    if (META_REGEX.footerLines.test(line)) {
      if (META_REGEX.sessionEnd.test(line)) {
        end = fromUtcDateStr(findMatch([line], META_REGEX.sessionEnd));
      } else if (META_REGEX.elapsedTime.test(line)) {
        const elapsed = findMatch([line], META_REGEX.elapsedTime);

        // This is the end of the parsing. Because normal lines are parsed through a Promise, they will be delivered
        // asynchronously. So we must ensure that this result is also delivered asynchronously.
        setTimeout(() => {
          const parsedElapsed = elapsed === 'N/A' ? 0 : parseFloat(elapsed);
          if (parsedElapsed) {
            meta.session.elapsed = parsedElapsed;
          }
          if (end) {
            meta.session.end = end;
          }
          result.next({
            meta,
            rowIndex: progress.index++,
          });
          result.complete();
          progress.completed = true;
        }, 0);
      }
    } else {
      parseBody([rowHeaderLine, line], true).then((rows) => {
        row = rows[0];
        meta.session.end = row[FlightLogHeader.DateTime];
        meta.session.elapsed = row[FlightLogHeader.ElapsedTime];
        result.next({
          meta,
          rowIndex: progress.index++,
          row,
          info: parseJsonInfo(row.Info),  // Parsed Info column, if the column was populated with a JSON array.
        })
      });
    }

  }, (err) => { console.error('parsing error: ' + err); result.complete(); }, () => {
    if (!progress.completed) {
      setTimeout(() => {
        result.complete();
        progress.completed = true;
      }, 0);
    }
  });

  return result;
}

export function parseLog(log: String): Promise<FlightLog> {
  const lines = log.split('\n');
  const subject = new QuasiSubject<string>();
  const parse = parseLogStream(subject);

  const flightLog: FlightLog = {
    metaData: {} as FlightLogMetaData,
    rows: [],
    infos: []
  }
  parse.subscribe((event) => {
    // The metadata is updated as the file is parsed, so always grab the latest one.
    flightLog.metaData = (event.meta) ? event.meta : flightLog.metaData;
    if (event.row) {
      flightLog.rows.push(event.row);
    }
    if (event.info) {
      // @ts-ignore
      flightLog.infos.push(event.info);
    }
  });
  lines.forEach(l => subject.next(l));
  subject.complete();

  return new Promise<FlightLog>((resolve, reject) => {
    parse.toPromise().then(() => resolve(flightLog)).catch((reason => reject(reason)));
  });
}

function parseBody(lines: string[], sync?: boolean): Promise<FlightLogRow[]> {
  const text = lines.join('\n');
  const options = {
    delimiter: '\t',
    escape: null,
    from: 1,
    quote: null,
    relax_column_count: true,
  };

  return new Promise((resolve, reject) => {
    const onResults = (err: any, result: string[]) => {
      if (err) {
        return reject(err);
      }

      const [headers, ...rows] = result;

      const logs = rows.map((row) => {
        const log = {} as FlightLogRow;
        for (let i = 0; i < headers.length; i++) {
          const header = headers[i].trim() as FlightLogHeader;
          let value: any = row[i];

          if (INT_FIELDS.has(header)) {
            value = parseInt(value, 10);
          }

          if (FLOAT_FIELDS.has(header)) {
            value = parseFloat(value);
          }

          if (BOOL_FIELDS.has(header)) {
            value = value !== '0';
          }

          if (DATE_FIELDS.has(header)) {
            value = fromUtcDateStr(value);
          }

          log[header] = value;
        }

        return log;
      });

      resolve(logs);
    };
    if (sync) {
      const results = syncParse(text, options);
      onResults(undefined, results);
    } else {
      // @ts-ignore
      parse(text, options, onResults);
    }
  });
}

function findMatch(search: string[], regex: RegExp, isNum?: boolean) {
  let match;
  for (let str of search) {
    match = str.match(regex);
    if (match) {
      break;
    }
  }

  if (!match) {
    return isNum ? '0' : 'N/A';
  }

  return match[1];
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as any);
}

export function fromUtcDateStr(utcDateStr: string) {
  if (isValidDate(utcDateStr)) {
    return utcDateStr as any as Date;
  }
  const isBadDate = !utcDateStr || !utcDateStr.trim().length || utcDateStr === 'N/A';
  if (isBadDate) {
    return null;
  }
  if (!/Z$/.test(utcDateStr)) {
    utcDateStr = utcDateStr + '.000Z';
  }
  return new Date(utcDateStr);
}

function parseMetaData(headers: string[], footers: string[]): FlightLogMetaData {
  const meta = [...headers, ...footers];
  let end = findMatch(meta, META_REGEX.sessionEnd);
  let elapsed = findMatch(meta, META_REGEX.elapsedTime);

  // if we weren't able to parse an end date or an elapsed time from our footer (which is really just the last three
  // lines of the log file), it's likely that we have a truncated log file. if that's the case, we can still salvage
  // some valid data by parsing the date and elapsed time from the very last log row in the file, which is what we're
  // doing below. it's pretty brittle, but it's preferred to having an invalid end date and a NaN elapsed time.
  if ((end === 'N/A' || elapsed === 'N/A') && footers.length > 0) {
    const lastLine = footers[footers.length - 1];
    const pieces = lastLine.split('\t');

    // if we don't have at least two pieces, i don't know what is in `footer` so i'm just going to leave it alone
    if (pieces.length >= 2) {
      end = pieces[0];
      elapsed = pieces[1];
    }
  }

  return {
    appVersion: findMatch(meta, META_REGEX.appVersion),
    isCustomRecord: false,
    session: {
      id: findMatch(meta, META_REGEX.sessionId),
      start: fromUtcDateStr(findMatch(meta, META_REGEX.sessionStart)) as Date,
      end: fromUtcDateStr(end),
      elapsed: elapsed === 'N/A' ? 0 : parseFloat(elapsed),
    },
    device: {
      model: findMatch(meta, META_REGEX.deviceModel),
      os: findMatch(meta, META_REGEX.deviceOS).replace(/\t/g, ' '),
      platform: findMatch(meta, META_REGEX.platform),
    },
    aircraft: {
      model: findMatch(meta, META_REGEX.aircraftModel),
      name: findMatch(meta, META_REGEX.aircraftName),
      firmware: findMatch(meta, META_REGEX.aircraftFirmware),
    },
    battery: {
      chargeVolume: parseInt(findMatch(meta, META_REGEX.batteryChargeVolume, true), 10),
      remainingLifePercent: parseInt(findMatch(meta, META_REGEX.batteryRemainingLife, true), 10),
      discharges: parseInt(findMatch(meta, META_REGEX.batteryDischarges, true), 10),
      cells: parseInt(findMatch(meta, META_REGEX.batteryCells, true), 10),
      firmware: findMatch(meta, META_REGEX.batteryFirmware),
      serialNumber: findMatch(meta, META_REGEX.batterySerialNumber),
    },
    flightController: {
      serialNumber: findMatch(meta, META_REGEX.fcSerialNumber),
      firmware: findMatch(meta, META_REGEX.fcFirmware),
    },
    gimbal: {
      firmware: findMatch(meta, META_REGEX.gimbalFirmware),
    },
    remoteController: {
      serialNumber: findMatch(meta, META_REGEX.rcSerialNumber),
      firmware: findMatch(meta, META_REGEX.rcFirmware),
    },
    camera: {
      serialNumber: findMatch(meta, META_REGEX.cameraSerialNumber),
    },
    user: {
      userId: findMatch(meta, META_REGEX.userId),
      organizationId: findMatch(meta, META_REGEX.organizationId),
    },
  };
}

/**
 * Parse out the given string and return an object if the string is JSON, return undefined otherwise.
 *
 * @param info
 */
function parseJsonInfo(info: string): undefined|Array<object> {
  if (!info) {
    return undefined;
  }
  try {
    return JSON.parse(info);
  }
  catch (e) {
    return undefined;
  }
}
