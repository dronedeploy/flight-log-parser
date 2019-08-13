"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yargs_1 = require("yargs");
const parser_1 = require("./parser");
const types_1 = require("./types");
const relevantArgs = yargs_1.argv;
const { fields, file: path } = relevantArgs;
function showHelp(stream) {
    stream.write(`
Usage: flight-log-parser [flags]

Parses DroneDeploy flight logs into JSON.

Options:

  --file <path>                       Path to the flight log file, required

  --fields <comma delimited string>   Comma delimited string of fields to extract
                                      from logs, optional. If not provided, will
                                      output all fields. Valid fields can be
                                      found in the FlightLogHeader enum located
                                      at src/types.ts.
`);
}
if (!path) {
    showHelp(process.stderr);
    process.exit(1);
}
const content = fs_1.readFileSync(path).toString('utf8');
parser_1.parseLog(content).then((flightLog) => {
    if (fields) {
        const fieldsArray = fields.split(',').map((field) => types_1.FlightLogHeader[field.trim()]);
        const rows = flightLog.rows;
        for (const row of flightLog.rows) {
            for (const key of Object.keys(row)) {
                if (fieldsArray.indexOf(key) === -1) {
                    delete row[key];
                }
            }
        }
    }
    process.stdout.write(JSON.stringify(flightLog) + '\n');
});
//# sourceMappingURL=cli.js.map