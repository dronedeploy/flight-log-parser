"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parse_1 = require("csv-parse");
const field_types_1 = require("./field-types");
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
function parseBody(lines) {
    const text = lines.join('\n');
    const options = {
        delimiter: '\t',
        from: 1,
        relax_column_count: true,
    };
    return new Promise((resolve, reject) => {
        csv_parse_1.default(text, options, (err, result) => {
            if (err) {
                return reject(err);
            }
            const [headers, ...rows] = result;
            const logs = rows
                .map((row) => {
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
                    log[header] = value;
                }
                return log;
            });
            resolve(logs);
        });
    });
}
;
function findMatch(search, regex) {
    let match;
    for (let str of search) {
        match = str.match(regex);
        if (match) {
            break;
        }
    }
    if (!match) {
        return 'N/A';
    }
    return match[1];
}
;
function parseMetaData(headers, footers) {
    const meta = [...headers, ...footers];
    return {
        appVersion: findMatch(meta, META_REGEX.appVersion),
        session: {
            id: findMatch(meta, META_REGEX.sessionId),
            start: new Date(findMatch(meta, META_REGEX.sessionStart)),
            end: new Date(findMatch(meta, META_REGEX.sessionEnd)),
            elapsed: parseFloat(findMatch(meta, META_REGEX.elapsedTime)),
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
            chargeVolume: parseInt(findMatch(meta, META_REGEX.batteryChargeVolume), 10),
            remainingLifePercent: parseInt(findMatch(meta, META_REGEX.batteryRemainingLife), 10),
            discharges: parseInt(findMatch(meta, META_REGEX.batteryDischarges), 10),
            cells: parseInt(findMatch(meta, META_REGEX.batteryCells), 10),
            firmware: findMatch(meta, META_REGEX.batteryFirmware),
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
;
//# sourceMappingURL=parser.js.map