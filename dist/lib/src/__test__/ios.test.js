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
const parser_1 = require("../parser");
const types_1 = require("../types");
const testutil_1 = require("./testutil");
describe('test parse ios logs', () => {
    let iosLogs;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        iosLogs = yield (0, testutil_1.getIosLogs)();
    }));
    it('fsRead log should exist', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(iosLogs).toBeTruthy();
    }));
    describe('test sampleErrLog log', () => {
        let sampleErrLog;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            sampleErrLog = yield (0, parser_1.parseLog)(iosLogs.errorLog);
        }));
        describe('sampleErrLog detail test', () => {
            it('parsed log should have correct falsy value when session info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { session } = sampleErrLogMetaData;
                const { id, start, end, elapsed } = session;
                expect(id).toEqual('N/A');
                expect(start).toBeNull();
                expect(end).toEqual(new Date('2018-06-04T22:31:40.000Z'));
                expect(elapsed).toEqual(160.313);
            });
            it('parsed log should have correct falsy value when aircraft info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { aircraft } = sampleErrLogMetaData;
                const { model, name, firmware } = aircraft;
                expect(model).toEqual('N/A');
                expect(name).toEqual('N/A');
                expect(firmware).toEqual('N/A');
            });
            it('parsed log should have correct falsy value when battery info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { battery } = sampleErrLogMetaData;
                const { chargeVolume, remainingLifePercent, discharges, cells, firmware, serialNumber, } = battery;
                expect(serialNumber).toEqual('N/A');
                expect(chargeVolume).toEqual(0);
                expect(remainingLifePercent).toEqual(0);
                expect(discharges).toEqual(0);
                expect(cells).toEqual(0);
                expect(firmware).toEqual('N/A');
            });
            it('parsed log should have correct falsy value when gimbal info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { gimbal } = sampleErrLogMetaData;
                const { firmware } = gimbal;
                expect(firmware).toEqual('N/A');
            });
            it('parsed log should have correct falsy value when flightController info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { flightController } = sampleErrLogMetaData;
                const { serialNumber, firmware } = flightController;
                expect(serialNumber).toEqual('N/A');
                expect(firmware).toEqual('N/A');
            });
            it('parsed log should have correct falsy value when remoteController info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { remoteController } = sampleErrLogMetaData;
                const { serialNumber, firmware } = remoteController;
                expect(serialNumber).toEqual('N/A');
                expect(firmware).toEqual('N/A');
            });
            it('parsed log should have correct falsy value when camera info has no value', () => {
                const sampleErrLogMetaData = sampleErrLog.metaData;
                const { camera } = sampleErrLogMetaData;
                const { serialNumber } = camera;
                expect(serialNumber).toEqual('N/A');
            });
        });
    });
    describe('test iphone log', () => {
        let iphoneLog;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            iphoneLog = yield (0, parser_1.parseLog)(iosLogs.iphone);
        }));
        it('parsed log should have correct os', () => {
            const iphoneLogMetaData = iphoneLog.metaData;
            const os = iphoneLogMetaData.device.os;
            const re = /(ios \d+(\.\d)*)/i;
            const result = os.match(re);
            expect(result).toBeTruthy();
        });
        describe('iphone log rows', () => {
            it('has proper key for each row', () => {
                const iphoneLogRows = iphoneLog.rows;
                const firstRow = iphoneLogRows[0];
                const { AircraftBatteryPowerPercent } = types_1.FlightLogHeader;
                expect(firstRow).toHaveProperty(AircraftBatteryPowerPercent);
            });
        });
        describe('iphone-ios11-inspire metaData detail test', () => {
            it('parsed log should have correct session info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { session } = iphoneLogMetaData;
                const { id, start, end, elapsed } = session;
                const startDate = (0, parser_1.fromUtcDateStr)('06/04/2018 22:29:00');
                const endDate = (0, parser_1.fromUtcDateStr)('06/04/2018 22:31:40');
                expect(id).toEqual('12345678');
                expect(start).toEqual(startDate);
                expect(end).toEqual(endDate);
                expect(elapsed).toEqual(160.408);
            });
            it('parsed log should have correct aircraft info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { aircraft } = iphoneLogMetaData;
                const { model, name, firmware } = aircraft;
                expect(model).toEqual('Inspire 1 Pro');
                expect(name).toEqual('123');
                expect(firmware).toEqual('1.11.01.50');
            });
            it('parsed log should have correct battery info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { battery } = iphoneLogMetaData;
                const { chargeVolume, remainingLifePercent, discharges, cells, firmware, serialNumber, } = battery;
                expect(serialNumber).toEqual('12345678');
                expect(chargeVolume).toEqual(4287);
                expect(remainingLifePercent).toEqual(83);
                expect(discharges).toEqual(69);
                expect(cells).toEqual(6);
                expect(firmware).toEqual('03.09.00.00');
            });
            it('parsed log should have correct flightController info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { flightController } = iphoneLogMetaData;
                const { serialNumber, firmware } = flightController;
                expect(serialNumber).toEqual('N/A');
                expect(firmware).toEqual('02.04.20.50');
            });
            it('parsed log should have correct gimbal info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { gimbal } = iphoneLogMetaData;
                const { firmware } = gimbal;
                expect(firmware).toEqual('01.31.01.67');
            });
            it('parsed log should have correct remoteController info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { remoteController } = iphoneLogMetaData;
                const { serialNumber, firmware } = remoteController;
                expect(serialNumber).toEqual('12345678');
                expect(firmware).toEqual('1.2.0.17');
            });
            it('parsed log should have correct Camera info', () => {
                const iphoneLogMetaData = iphoneLog.metaData;
                const { camera } = iphoneLogMetaData;
                const { serialNumber } = camera;
                expect(serialNumber).toEqual('N/A');
            });
        });
    });
    describe('test ipad log', () => {
        let ipadLog;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            ipadLog = yield (0, parser_1.parseLog)(iosLogs.ipad);
        }));
        it('parsed log should have correct os', () => {
            const ipadLogMetaData = ipadLog.metaData;
            const os = ipadLogMetaData.device.os;
            const re = /(ios \d+(\.\d)*)/i;
            const result = os.match(re);
            expect(result).toBeTruthy();
        });
        describe('ipadLog rows', () => {
            it('has proper key for each row', () => {
                const ipadLogRows = ipadLog.rows;
                const firstRow = ipadLogRows[0];
                const { AircraftBatteryPowerPercent } = types_1.FlightLogHeader;
                expect(firstRow).toHaveProperty(AircraftBatteryPowerPercent);
            });
        });
        describe('ipad-ios11-phantom4 metaData test', () => {
            it('parsed log should have correct session info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { session } = ipadLogMetaData;
                const { id, start, end, elapsed } = session;
                const startDate = (0, parser_1.fromUtcDateStr)('05/23/2018 20:50:18');
                const endDate = (0, parser_1.fromUtcDateStr)('05/23/2018 20:54:12');
                expect(id).toEqual('12345678');
                expect(start).toEqual(startDate);
                expect(end).toEqual(endDate);
                expect(elapsed).toEqual(233.217);
            });
            it('parsed log should have correct aircraft info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { aircraft } = ipadLogMetaData;
                const { model, name, firmware } = aircraft;
                expect(model).toEqual('Phantom 4 Pro');
                expect(name).toEqual('123');
                expect(firmware).toEqual('01.05.0600');
            });
            it('parsed log should have correct battery info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { battery } = ipadLogMetaData;
                const { chargeVolume, remainingLifePercent, discharges, cells, firmware, serialNumber, } = battery;
                expect(serialNumber).toEqual('N/A');
                expect(chargeVolume).toEqual(5842);
                expect(remainingLifePercent).toEqual(0);
                expect(discharges).toEqual(28);
                expect(cells).toEqual(4);
                expect(firmware).toEqual('02.00.07.31');
            });
            it('parsed log should have correct gimbal info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { gimbal } = ipadLogMetaData;
                const { firmware } = gimbal;
                expect(firmware).toEqual('01.50.13.17');
            });
            it('parsed log should have correct flightController info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { flightController } = ipadLogMetaData;
                const { serialNumber, firmware } = flightController;
                expect(serialNumber).toEqual('12345678');
                expect(firmware).toEqual('03.02.44.07');
            });
            it('parsed log should have correct remoteController info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { remoteController } = ipadLogMetaData;
                const { serialNumber, firmware } = remoteController;
                expect(serialNumber).toEqual('12345678');
                expect(firmware).toEqual('01.04.01.00');
            });
            it('parsed log should have correct Camera info', () => {
                const ipadLogMetaData = ipadLog.metaData;
                const { camera } = ipadLogMetaData;
                const { serialNumber } = camera;
                expect(serialNumber).toEqual('N/A');
            });
        });
    });
});
//# sourceMappingURL=ios.test.js.map