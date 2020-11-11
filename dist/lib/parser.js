"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parse_1 = require("csv-parse");
const types_1 = require("./types");
const field_types_1 = require("./field-types");
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
const LOG_HEADER_LINES = 30;
const LOG_FOOTER_LINES = 3;
class QuasiSubject {
    constructor() {
        this.subscribers = [];
        this.errorSubscribers = [];
        this.completionSubscribers = [];
        this.isFinished = false;
    }
    next(value) {
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
    error(error) {
        if (this.isFinished) {
            return;
        }
        this.errorSubscribers.forEach((errSub) => errSub(error));
        this.complete();
    }
    subscribe(sub, errSub, completionSub) {
        this.subscribers.push(sub);
        if (errSub) {
            this.errorSubscribers.push(errSub);
        }
        if (completionSub) {
            this.completionSubscribers.push(completionSub);
        }
    }
    toPromise() {
        const source = this;
        return new Promise(function (resolve, reject) {
            let value;
            source.subscribe(function (v) {
                value = v;
            }, reject, function () {
                resolve(value);
            });
        });
    }
}
exports.QuasiSubject = QuasiSubject;
function parseLogStream(logStream) {
    const headerMetaLines = [];
    let meta;
    let rowHeaderLine;
    const result = new QuasiSubject();
    let progress = { index: 0, completed: false };
    let end;
    logStream.subscribe((line) => {
        if (!line.trim().length) {
            return;
        }
        if (headerMetaLines.length < LOG_HEADER_LINES) {
            headerMetaLines.push(line);
            progress.index++;
            return;
        }
        if (!meta) {
            rowHeaderLine = line;
            meta = parseMetaData(headerMetaLines, []);
            // This is the beginning of the parsing.
            result.next({
                meta,
                rowIndex: progress.index,
            });
            return;
        }
        let row;
        if (META_REGEX.footerLines.test(line)) {
            if (META_REGEX.sessionEnd.test(line)) {
                end = fromUtcDateStr(findMatch([line], META_REGEX.sessionEnd));
            }
            else if (META_REGEX.elapsedTime.test(line)) {
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
        }
        else {
            parseBody([rowHeaderLine, line], true).then((rows) => {
                row = rows[0];
                meta.session.end = row[types_1.FlightLogHeader.DateTime];
                meta.session.elapsed = row[types_1.FlightLogHeader.ElapsedTime];
                result.next({
                    meta,
                    rowIndex: progress.index++,
                    row,
                    info: (!row.Info) ? undefined : JSON.parse(row.Info),
                });
            });
        }
    }, (err) => { console.error('parsing error: ' + err); result.complete(); }, () => {
        if (!progress.completed) {
            result.complete();
        }
    });
    return result;
}
exports.parseLogStream = parseLogStream;
function parseLog(log) {
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
exports.parseLog = parseLog;
function parseBody(lines, sync) {
    const text = lines.join('\n');
    const options = {
        delimiter: '\t',
        from: 1,
        relax_column_count: true,
    };
    return new Promise((resolve, reject) => {
        const onResults = (err, result) => {
            if (err) {
                return reject(err);
            }
            const [headers, ...rows] = result;
            const logs = rows.map((row) => {
                const log = {};
                for (let i = 0; i < headers.length; i++) {
                    const header = headers[i].trim();
                    let value = row[i];
                    if (field_types_1.INT_FIELDS.has(header)) {
                        value = parseInt(value, 10);
                    }
                    if (field_types_1.FLOAT_FIELDS.has(header)) {
                        value = parseFloat(value);
                    }
                    if (field_types_1.BOOL_FIELDS.has(header)) {
                        value = value !== '0';
                    }
                    if (field_types_1.DATE_FIELDS.has(header)) {
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
        }
        else {
            csv_parse_1.default(text, options, onResults);
        }
    });
}
function findMatch(search, regex, isNum) {
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
function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}
function fromUtcDateStr(utcDateStr) {
    if (isValidDate(utcDateStr)) {
        return utcDateStr;
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
exports.fromUtcDateStr = fromUtcDateStr;
function parseMetaData(headers, footers) {
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
        session: {
            id: findMatch(meta, META_REGEX.sessionId),
            start: fromUtcDateStr(findMatch(meta, META_REGEX.sessionStart)),
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
//# sourceMappingURL=parser.js.map