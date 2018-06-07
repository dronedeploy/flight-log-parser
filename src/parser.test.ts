import 'jest';
import path from 'path';
import fs from 'fs';
import {promisify} from 'util';

import { parseLog } from './parser';

const readFileAsync = promisify(fs.readFile);
const iosfilePath = path.join(__dirname, '../testlog/android.log');
const androidFilePath = path.join(__dirname, '../testlog/ios11-2.log');

describe('test parse logs', () => {
    let parsedLogs : any;
    beforeAll(async() => {
        const testLogs = {
            ios: await readFileAsync(iosfilePath, {encoding: 'utf8'}),
            android: await readFileAsync(androidFilePath, {encoding: 'utf8'}),
            // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
        };
        const logs = Object.values(testLogs).map(cur => parseLog(cur));
        parsedLogs = await Promise.all(logs);
    });

    it('parsed log should exist', async() => {
      console.log("parsedLogs", parsedLogs[0].metaData);
      expect(parsedLogs).toBeTruthy();
    });

    it('parsed log should have metaData and rows', async() => {
      const result = parsedLogs.filter((cur) => !!cur.metaData && !!cur.rows);
      expect(result.length).toBe(parsedLogs.length);
    });

    // it('should ')
});
