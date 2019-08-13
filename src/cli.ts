import { readFileSync } from 'fs';
import { argv } from 'yargs';

import { parseLog } from './parser';
import { FlightLogHeader } from './types';

const relevantArgs = (argv as any) as { fields: string, file: string };
const { fields, file: path } = relevantArgs;

function showHelp(stream: NodeJS.WriteStream) {
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

const content = readFileSync(path).toString('utf8');

parseLog(content).then((flightLog) => {
  if (fields) {
    const fieldsArray = fields.split(',').map((field: any) => FlightLogHeader[field.trim()]);
    const rows = flightLog.rows;

    for (const row of flightLog.rows) {
      for (const key of Object.keys(row)) {
        if (fieldsArray.indexOf(key) === -1) {
          delete row[key as FlightLogHeader];
        }
      }
    }
  }

  process.stdout.write(JSON.stringify(flightLog) + '\n');
});
