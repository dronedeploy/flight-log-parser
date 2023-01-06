"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const path_1 = require("path");
const promises_1 = require("fs/promises");
const parser_1 = require("../parser");
const types_1 = require("../types");
const readFileAsync = promises_1.default.readFile;
// Maybe we can read all files from one folder?
const androidFilePath = path_1.default.join(__dirname, '/../../testlog/pixel2-inspire2.log');
describe('test parse android logs', () => {
    let androidLogs;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        androidLogs = {
            pixel2: yield readFileAsync(androidFilePath, { encoding: 'utf8' }),
            // other: await readFileAsync(otherPath, {encoding: 'utf8'}),
        };
    }));
    it('fsRead log should exist', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(androidLogs).toBeTruthy();
    }));
    describe('test pixel2 log', () => {
        let pixel2Log;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            pixel2Log = yield (0, parser_1.parseLog)(androidLogs.pixel2);
        }));
        it('parsed log should exist', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(pixel2Log).toBeTruthy();
        }));
        it('parsed log should have correct os', () => __awaiter(void 0, void 0, void 0, function* () {
            const pixel2LogMetaData = pixel2Log.metaData;
            const os = pixel2LogMetaData.device.os;
            const re = /(android \d+(\.\d)*)/i;
            const result = os.match(re);
            expect(result).toBeTruthy();
        }));
        describe('pixel2 log rows', () => {
            it('has proper key for each row', () => {
                const pixel2LogRows = pixel2Log.rows;
                const firstRow = pixel2LogRows[0];
                const { AircraftBatteryPowerPercent } = types_1.FlightLogHeader;
                expect(firstRow).toHaveProperty(AircraftBatteryPowerPercent);
            });
        });
        describe('pixel2-inspire2 log metaData test', () => {
            it('parsed log should have correct session info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { session } = pixel2LogMetaData;
                const { id, start, end, elapsed } = session;
                const startDate = (0, parser_1.fromUtcDateStr)('06/04/2018 20:32:30');
                const endDate = (0, parser_1.fromUtcDateStr)('06/04/2018 20:34:55');
                expect(id).toEqual('12345678');
                expect(start).toEqual(startDate);
                expect(end).toEqual(endDate);
                expect(elapsed).toEqual(145.0);
            });
            it('parsed log should have correct aircraft info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { aircraft } = pixel2LogMetaData;
                const { model, name, firmware } = aircraft;
                expect(model).toEqual('Inspire 2');
                expect(name).toEqual('123');
                expect(firmware).toEqual('01.02.0100');
            });
            it('parsed log should have correct battery info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { battery } = pixel2LogMetaData;
                const { chargeVolume, remainingLifePercent, discharges, cells, firmware, serialNumber, } = battery;
                expect(serialNumber).toEqual('12345678');
                expect(chargeVolume).toEqual(4152);
                expect(remainingLifePercent).toEqual(98);
                expect(discharges).toEqual(27);
                expect(cells).toEqual(6);
                expect(firmware).toEqual('01.00.00.65');
            });
            it('parsed log should have correct flightController info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { flightController } = pixel2LogMetaData;
                const { serialNumber, firmware } = flightController;
                expect(serialNumber).toEqual('12345678');
                expect(firmware).toEqual('03.02.44.09');
            });
            it('parsed log should have correct gimbal info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { gimbal } = pixel2LogMetaData;
                const { firmware } = gimbal;
                expect(firmware).toEqual('01.01.00.20');
            });
            it('parsed log should have correct remoteController info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { remoteController } = pixel2LogMetaData;
                const { serialNumber, firmware } = remoteController;
                expect(serialNumber).toEqual('12345678');
                expect(firmware).toEqual('01.01.0010');
            });
            it('parsed log should have correct Camera info', () => {
                const pixel2LogMetaData = pixel2Log.metaData;
                const { camera } = pixel2LogMetaData;
                const { serialNumber } = camera;
                expect(serialNumber).toEqual('12345678');
            });
        });
    });
});
//# sourceMappingURL=android.test.js.map