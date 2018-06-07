import 'jest';
import path from 'path';
import fs from 'fs';
import {promisify} from 'util';
import { parseLog } from './parser';

const readFileAsync = promisify(fs.readFile);

// Maybe we can read all files from one folder?
const iosFilePath = path.join(__dirname, '../testlog/ipad-ios11-phantom4.log');
const androidFilePath = path.join(__dirname, '../testlog/pixel2-inspire2.log');
// const iosFilePath2 = path.join(__dirname, '../testlog/iphone-ios11-inspire.log');

describe('test parse logs', () => {
    let parsedLogs : any;
    beforeAll(async() => {
        const testLogs = {
            ios: await readFileAsync(iosFilePath, {encoding: 'utf8'}),
            android: await readFileAsync(androidFilePath, {encoding: 'utf8'}),
            // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
        };
        const logs = Object.values(testLogs).map(cur => parseLog(cur));
        parsedLogs = await Promise.all(logs);
    });

    it('parsed log should exist', async() => {
      // console.log("parsedLogs", parsedLogs[0].metaData);
      expect(parsedLogs).toBeTruthy();
    });

    describe('test ios logs', () => {
        it('parsed log should have correct metaData', async() => {
            const ioslogMetaData = parsedLogs[0].metaData;
            const os = ioslogMetaData.device.os;
            const re = /(ios \d+(\.\d)*)/i
            const result = os.match(re);
            expect(result).toBeTruthy();
        });
    });

    describe('test android logs', () => {
        it('parsed log should have correct metaData', async() => {
            const ioslogMetaData = parsedLogs[1].metaData;
            const os = ioslogMetaData.device.os;
            const re = /(android \d+(\.\d)*)/i
            const result = os.match(re);
            expect(result).toBeTruthy();
        });
    });
});
    // it('should ')
