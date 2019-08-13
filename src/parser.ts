const parse = require('csv-parse');

import { FlightLogRow, FlightLogHeader, FlightLogMetaData, FlightLog } from './types';
import { INT_FIELDS, BOOL_FIELDS, FLOAT_FIELDS } from './field-types';

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
  gimbalFirmware: /^Gimbal Firmware\s+(.+)$/,
  rcSerialNumber: /^Remote Control Serial Number\s+(.+)$/,
  rcFirmware: /^Remote Control Firmware\s+(.+)$/,
  cameraSerialNumber: /^Camera Serial Number\s+(.+)$/,
  elapsedTime: /^Elapsed Time \(sec\)\s+(.+)$/,
};

const LOG_HEADER_LINES = 27;
const LOG_FOOTER_LINES = 3;

export function parseLog(log: String): Promise<FlightLog> {
  const lines = log.split('\n');

  if (lines[lines.length - 1] === '') {
    lines.pop();
  }

  const header = lines.slice(0, LOG_HEADER_LINES);
  const footer = lines.slice(-LOG_FOOTER_LINES);
  const body = lines.slice(LOG_HEADER_LINES, -LOG_FOOTER_LINES);
  const metaData = parseMetaData(header, footer);

  return parseBody(body).then((rows) => ({
    metaData,
    rows,
  }));
}

function parseBody(lines: string[]): Promise<FlightLogRow[]> {
  const text = lines.join('\n');
  const options = {
    delimiter: '\t',
    from: 1,
    relax_column_count: true,
  };

  return new Promise((resolve, reject) => {
    parse(text, options, (err: any, result: string[]) => {
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

          log[header] = value;
        }

        return log;
      });

      resolve(logs);
    });
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

function parseMetaData(headers: string[], footers: string[]): FlightLogMetaData {
  const meta = [...headers, ...footers];
  let end = findMatch(meta, META_REGEX.sessionEnd);
  let elapsed = findMatch(meta, META_REGEX.elapsedTime);

  // if we weren't able to parse an end date or an elapsed time from our footer (which is really just the last three
  // lines of the log file), it's likely that we have a truncated log file. if that's the case, we can still salvage
  // some valid data by parsing the date and elapsed time from the very last log row in the file, which is what we're
  // doing below. it's pretty brittle, but it's preferred to having an invalid end date and a NaN elapsed time.
  if (end === 'N/A' || elapsed === 'N/A') {
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
    session: {
      id: findMatch(meta, META_REGEX.sessionId),
      start: new Date(findMatch(meta, META_REGEX.sessionStart)),
      end: new Date(end),
      elapsed: elapsed === 'N/A' ? 0 : parseFloat(elapsed),
    },
    device: {
      model: findMatch(meta, META_REGEX.deviceModel),
      os: findMatch(meta, META_REGEX.deviceOS).replace(/\t/g, ' '),
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
  };
}
