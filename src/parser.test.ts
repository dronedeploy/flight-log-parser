import 'jest';
import path from 'path';
import fs from 'fs';
import {promisify} from 'util';

import { parseLog } from './parser';

const readFileAsync = promisify(fs.readFile);
const iosfilePath = path.join(__dirname, '../testlog/android.log');
const androidFilePath = path.join(__dirname, '../testlog/ios11-2.log');

describe('test parse logs', () => {
    let testLogs : any;
    beforeAll(async() => {
        testLogs = {
            ios: await readFileAsync(iosfilePath, {encoding: 'utf8'}),
            android: await readFileAsync(androidFilePath, {encoding: 'utf8'}),
            // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
        };
    });

    it('parsed log should exist', async() => {
      const result = await parseLog(testLogs.ios);
      expect(result).toBeTruthy();
    });
});
