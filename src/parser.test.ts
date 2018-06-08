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
    describe('test parse ios logs', () => {
        let iosLogs : any;
        beforeAll(async() => {
            iosLogs = {
                ipad: await readFileAsync(iosFilePath, {encoding: 'utf8'}),
                iphone: await readFileAsync(androidFilePath, {encoding: 'utf8'}),
                // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
            };
        });

        it('fsRead log should exist', async() => {
            expect(iosLogs).toBeTruthy();
        });

        describe('test ipad logs', () => {
            let ipadLog : any;
            beforeAll(async() => {
                ipadLog = await parseLog(iosLogs.ipad);
            });

            it('parsed log should have correct os', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const os = ipadLogMetaData.device.os;
                const re = /(ios \d+(\.\d)*)/i
                const result = os.match(re);
                expect(result).toBeTruthy();
            });

            it('parsed log should have correct session info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {session} = ipadLogMetaData;
                const {id, start, end, elapsed} = session;

                const startDate = new Date("05/23/2018 20:50:18");
                const endDate = new Date("05/23/2018 20:54:12");

                expect(id).toEqual("5b05d265efd0520e45f2b17d");
                expect(start).toEqual(startDate);
                expect(end).toEqual(endDate);
                expect(elapsed).toEqual(233.217);
            });


        });
    });


    describe('test parse android logs', () => {
        let androidLogs : any;
        beforeAll(async() => {
            androidLogs = {
                pixel2: await readFileAsync(androidFilePath, {encoding: 'utf8'}),
                // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
            };
        });

        it('fsRead log should exist', async() => {
            expect(androidLogs).toBeTruthy();
        });

        describe('test android logs', () => {
            it('parsed log should exist', async() => {
                expect(androidLogs).toBeTruthy();
            });

            it('parsed log should have correct os', async() => {
                const pixel2Log = await parseLog(androidLogs.pixel2);
                const pixel2LogMetaData = pixel2Log.metaData;
                const os = pixel2LogMetaData.device.os;
                const re = /(android \d+(\.\d)*)/i
                const result = os.match(re);
                expect(result).toBeTruthy();
            });
        });
    });
});
