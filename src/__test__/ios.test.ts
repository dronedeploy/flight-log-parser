import 'jest';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import { parseLog } from '../parser';

const readFileAsync = promisify(fs.readFile);

// Maybe we can read all files from one folder?
const ipadFilePath = path.join(__dirname, '/../../testlog/ipad-ios11-phantom4.log');
const iphoneFilePath = path.join(__dirname, '/../../testlog/iphone-ios11-inspire.log');
// const iosFilePath2 = path.join(__dirname, '../testlog/iphone-ios11-inspire.log');
describe('test parse ios logs', () => {
    let iosLogs : any;
    beforeAll(async() => {
        iosLogs = {
            ipad: await readFileAsync(ipadFilePath, {encoding: 'utf8'}),
            iphone: await readFileAsync(iphoneFilePath, {encoding: 'utf8'}),
            // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
        };
    });

    it('fsRead log should exist', async() => {
        expect(iosLogs).toBeTruthy();
    });

    xdescribe('test iphone log', () => {
        let iphoneLog : any;
        beforeAll(async() => {
            iphoneLog = await parseLog(iosLogs.iphone);
        });

        it('parsed log should have correct os', () => {
            const iphoneLogMetaData = iphoneLog.metaData;
            const os = iphoneLogMetaData.device.os;
            const re = /(ios \d+(\.\d)*)/i
            const result = os.match(re);
            expect(result).toBeTruthy();
        });

        describe('iphone log detail test', () => {
            it('parsed log should have correct session info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {session} = iphoneLogMetaData;
                const {id, start, end, elapsed} = session;

                const startDate = new Date("06/04/2018 22:29:00");
                const endDate = new Date("06/04/2018 22:31:40");

                expect(id).toEqual("5b15bcec1fae218a83b7e76a");
                expect(start).toEqual(startDate);
                expect(end).toEqual(endDate);
                expect(elapsed).toEqual(160.408);
            });

            it('parsed log should have correct aircraft info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {aircraft} = iphoneLogMetaData;
                const {model, name, firmware} = aircraft;

                expect(model).toEqual("Inspire 1 Pro");
                expect(name).toEqual("inspire pro");
                expect(firmware).toEqual("1.11.01.50");
            });

            it('parsed log should have correct battery info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {battery} = iphoneLogMetaData;
                const {chargeVolume, remainingLifePercent, discharges, cells, firmware} = battery;

                expect(chargeVolume).toEqual(4287);
                expect(remainingLifePercent).toEqual(83);
                expect(discharges).toEqual(69);
                expect(cells).toEqual(6);
                expect(firmware).toEqual("03.09.00.00");
            });


            it('parsed log should have correct flightController info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {flightController} = iphoneLogMetaData;
                const {serialNumber, firmware} = flightController;

                expect(serialNumber).toEqual('N/A');
                expect(firmware).toEqual('02.04.20.50');
            });

            it('parsed log should have correct gimbal info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {gimbal} = iphoneLogMetaData;
                const {firmware} = gimbal;

                expect(firmware).toEqual('01.31.01.67');
            });

            it('parsed log should have correct remoteController info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {remoteController} = iphoneLogMetaData;
                const {serialNumber, firmware} = remoteController;

                expect(serialNumber).toEqual("03LL264834");
                expect(firmware).toEqual("1.2.0.17");
            });

            it('parsed log should have correct Camera info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const {camera} = iphoneLogMetaData;
                const {serialNumber} = camera;

                expect(serialNumber).toEqual('N/A');
            });
        });
    });

    xdescribe('test ipad log', () => {
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

        describe('ipadLog detail test', () => {
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

            it('parsed log should have correct aircraft info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {aircraft} = ipadLogMetaData;
                const {model, name, firmware} = aircraft;

                expect(model).toEqual("Phantom 4 Pro");
                expect(name).toEqual("dd-10");
                expect(firmware).toEqual("01.05.0600");
            });

            it('parsed log should have correct battery info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {battery} = ipadLogMetaData;
                const {chargeVolume, remainingLifePercent, discharges, cells, firmware} = battery;

                expect(chargeVolume).toEqual(5842);
                expect(remainingLifePercent).toEqual(0);
                expect(discharges).toEqual(28);
                expect(cells).toEqual(4);
                expect(firmware).toEqual("02.00.07.31");
            });

            it('parsed log should have correct gimbal info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {gimbal} = ipadLogMetaData;
                const {firmware} = gimbal;

                expect(firmware).toEqual('01.50.13.17');
            });

            it('parsed log should have correct flightController info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {flightController} = ipadLogMetaData;
                const {serialNumber, firmware} = flightController;

                expect(serialNumber).toEqual("07JDE3700201UW");
                expect(firmware).toEqual("03.02.44.07");
            });

            it('parsed log should have correct remoteController info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {remoteController} = ipadLogMetaData;
                const {serialNumber, firmware} = remoteController;

                expect(serialNumber).toEqual("0CKJ202CZ1");
                expect(firmware).toEqual("01.04.01.00");
            });

            it('parsed log should have correct Camera info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const {camera} = ipadLogMetaData;
                const {serialNumber} = camera;

                expect(serialNumber).toEqual('N/A');
            });
        });
    });
});
