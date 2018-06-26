import 'jest';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import { parseLog } from '../parser';
import { FlightLogHeader } from '../types';

const readFileAsync = promisify(fs.readFile);

// Maybe we can read all files from one folder?
const androidFilePath = path.join(__dirname, '/../../testlog/pixel2-inspire2.log');

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

    describe('test pixel2 log', () => {
        let pixel2Log : any;
        beforeAll(async() => {
            pixel2Log = await parseLog(androidLogs.pixel2);
        });

        it('parsed log should exist', async() => {
            expect(pixel2Log).toBeTruthy();
        });

        it('parsed log should have correct os', async() => {
            const pixel2LogMetaData = pixel2Log.metaData;
            const os = pixel2LogMetaData.device.os;
            const re = /(android \d+(\.\d)*)/i
            const result = os.match(re);
            expect(result).toBeTruthy();
        });

        describe('pixel2 log rows', () => {
            it('has proper key for each row', () => {
                  const pixel2LogRows = pixel2Log.rows;
                  const firstRow = pixel2LogRows[0];
                  const {AircraftBatteryPowerPercent} = FlightLogHeader;
                  expect(firstRow).toHaveProperty(AircraftBatteryPowerPercent);
            })
        })

        describe('pixel2-inspire2 log metaData test', () => {
            it('parsed log should have correct session info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {session} = pixel2LogMetaData;
                const {id, start, end, elapsed} = session;

                const startDate = new Date("06/04/2018 20:32:30");
                const endDate = new Date("06/04/2018 20:34:55");

                expect(id).toEqual("12345678");
                expect(start).toEqual(startDate);
                expect(end).toEqual(endDate);
                expect(elapsed).toEqual(145.0);
            });

            it('parsed log should have correct aircraft info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {aircraft} = pixel2LogMetaData;
                const {model, name, firmware} = aircraft;

                expect(model).toEqual("Inspire 2");
                expect(name).toEqual("123");
                expect(firmware).toEqual("01.02.0100");
            });

            it('parsed log should have correct battery info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {battery} = pixel2LogMetaData;
                const {chargeVolume, remainingLifePercent, discharges, cells, firmware, serialNumber} = battery;

                expect(serialNumber).toEqual("12345678");
                expect(chargeVolume).toEqual(4152);
                expect(remainingLifePercent).toEqual(98);
                expect(discharges).toEqual(27);
                expect(cells).toEqual(6);
                expect(firmware).toEqual("01.00.00.65");
            });

            it('parsed log should have correct flightController info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {flightController} = pixel2LogMetaData;
                const {serialNumber, firmware} = flightController;

                expect(serialNumber).toEqual("12345678");
                expect(firmware).toEqual("03.02.44.09");
            });

            it('parsed log should have correct gimbal info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {gimbal} = pixel2LogMetaData;
                const {firmware} = gimbal;

                expect(firmware).toEqual('01.01.00.20');
            });

            it('parsed log should have correct remoteController info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {remoteController} = pixel2LogMetaData;
                const {serialNumber, firmware} = remoteController;

                expect(serialNumber).toEqual("12345678");
                expect(firmware).toEqual("01.01.0010");
            });

            it('parsed log should have correct Camera info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const {camera} = pixel2LogMetaData;
                const {serialNumber} = camera;

                expect(serialNumber).toEqual('12345678');
            });
        });
    });
});
