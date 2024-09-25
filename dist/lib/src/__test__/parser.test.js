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
const testutil_1 = require("./testutil");
const _ = require('lodash');
describe('parser', () => {
    let iosLogs;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        iosLogs = yield (0, testutil_1.getIosLogs)();
    }));
    describe('fromUtcDateStr', () => {
        it('should parse tz-aware timestamps correctly', () => {
            const noonPacific = '05/23/2018 20:00:00.000Z';
            expect((0, parser_1.fromUtcDateStr)(noonPacific).toISOString()).toBe('2018-05-23T20:00:00.000Z');
            const noonUtc = '05/23/2018 12:00:00.000Z';
            expect((0, parser_1.fromUtcDateStr)(noonUtc).toISOString()).toBe('2018-05-23T12:00:00.000Z');
        });
        it('should parse tz-naive timestamps as UTC', () => {
            const noon = '05/23/2018 12:00:00';
            expect((0, parser_1.fromUtcDateStr)(noon).toISOString()).toBe('2018-05-23T12:00:00.000Z');
            const onePm = '2018-05-23 13:00:00';
            expect((0, parser_1.fromUtcDateStr)(onePm).toISOString()).toBe('2018-05-23T13:00:00.000Z');
        });
    });
    describe('parseLogStream', () => {
        it('should parse the ios stream correctly', () => {
            const subj = new parser_1.QuasiSubject();
            const events = [];
            const parseLogStreamObs = (0, parser_1.parseLogStream)(subj);
            parseLogStreamObs.subscribe((logEvent) => {
                events.push(_.cloneDeep(logEvent));
            });
            iosLogs.ipadmin.split('\n').forEach((line) => subj.next(line));
            const meta = {
                aircraft: {
                    firmware: '01.05.0600',
                    model: 'Phantom 4 Pro',
                    name: '123',
                },
                appVersion: '0.0.0',
                battery: {
                    cells: 4,
                    chargeVolume: 5842,
                    discharges: 28,
                    firmware: '02.00.07.31',
                    remainingLifePercent: 0,
                    serialNumber: 'N/A',
                },
                camera: {
                    serialNumber: 'N/A',
                },
                device: {
                    model: 'iPad',
                    os: 'iOS 11.2.6',
                    platform: 'N/A',
                },
                flightController: {
                    firmware: '03.02.44.07',
                    serialNumber: '12345678',
                },
                gimbal: {
                    firmware: '01.50.13.17',
                },
                remoteController: {
                    firmware: '01.04.01.00',
                    serialNumber: '12345678',
                },
                session: {
                    elapsed: 233.217,
                    end: new Date('2018-05-23T20:54:12.000Z'),
                    id: '12345678',
                    start: new Date('2018-05-23T20:50:18.000Z'),
                },
                user: {
                    userId: 'N/A',
                    organizationId: 'N/A',
                },
            };
            return parseLogStreamObs.toPromise().then(() => {
                expect(events.length).toBe(9);
                expect(events[0]).toEqual({
                    meta: _.merge(_.cloneDeep(meta), {
                        session: {
                            elapsed: 0,
                            end: null,
                        },
                    }),
                    rowIndex: 27,
                });
                expect(events[events.length - 2]).toEqual({
                    info: undefined,
                    meta: _.merge(_.cloneDeep(meta), {
                        session: {
                            elapsed: 233.121,
                            end: new Date('2018-05-23T20:54:11.000Z'),
                        },
                    }),
                    row: {
                        'Aircraft Barometric Altitude (ft)': 2.952756,
                        'Aircraft Battery Cell 1 Voltage': 4001,
                        'Aircraft Battery Cell 2 Voltage': 3999,
                        'Aircraft Battery Cell 3 Voltage': 4002,
                        'Aircraft Battery Cell 4 Voltage': 3981,
                        'Aircraft Battery Cell Voltage Last Updated (ms)': '0',
                        'Aircraft Battery Charge (mAh)': 4907,
                        'Aircraft Battery Current (mA)': -11762,
                        'Aircraft Battery Last Updated (ms)': '323',
                        'Aircraft Battery Power (%)': 84,
                        'Aircraft Battery Temperature (Fahrenheit)': 94,
                        'Aircraft Battery Voltage (mV)': 15931,
                        'Aircraft Camera Burst Capture': false,
                        'Aircraft Camera Changeable Lens Supported': false,
                        'Aircraft Camera Interval Capture': false,
                        'Aircraft Camera Lens AF Assistant': false,
                        'Aircraft Camera Lens AF Enabled': false,
                        'Aircraft Camera Lens Assistant Working': false,
                        'Aircraft Camera Lens Focus Mode': 'Manual',
                        'Aircraft Camera Lens Focus Mode Value': 0,
                        'Aircraft Camera Lens Focus Status': 'Idle',
                        'Aircraft Camera Lens Focus Status Value': 0,
                        'Aircraft Camera Lens Installed': false,
                        'Aircraft Camera Lens MF Assistant': false,
                        'Aircraft Camera Lens State Last Updated (ms)': 'No Data',
                        'Aircraft Camera Lens Type': 'Unknown',
                        'Aircraft Camera Mode': 'Shoot Photo',
                        'Aircraft Camera Mode Value': 0,
                        'Aircraft Camera Overheated': false,
                        'Aircraft Camera Raw Capture': false,
                        'Aircraft Camera Recording': false,
                        'Aircraft Camera SD Card Exists': true,
                        'Aircraft Camera SD Card Remaining (%)': 59.53524,
                        'Aircraft Camera SD Card State Last Updated (ms)': '25',
                        'Aircraft Camera Sensor Error': false,
                        'Aircraft Camera Single Capture': false,
                        'Aircraft Camera State Last Updated (ms)': '25',
                        'Aircraft Camera Storing Photo': false,
                        'Aircraft Flight Mode': 'Landing',
                        'Aircraft Flight Mode Value': 12,
                        'Aircraft Flying': true,
                        'Aircraft GPS Signal': 'Very Good',
                        'Aircraft GPS Signal Value': 4,
                        'Aircraft Heading (Degrees)': 48.3,
                        'Aircraft IMU Preheating': false,
                        'Aircraft Latitude (Degrees)': 37.77181958553695,
                        'Aircraft Longitude (Degrees)': -122.4074142850207,
                        'Aircraft Motors On': true,
                        'Aircraft No-fly': 'Fly Zone Airport',
                        'Aircraft No-fly Latitude (Degrees)': 0,
                        'Aircraft No-fly Longitude (Degrees)': 0,
                        'Aircraft No-fly Radius (ft)': 0,
                        'Aircraft No-fly Value': 0,
                        'Aircraft Pitch (Degrees)': -0.5,
                        'Aircraft Roll (Degrees)': 0.4,
                        'Aircraft Satellites': 15,
                        'Aircraft Smart Go-home Countdown (sec)': 0,
                        'Aircraft Smart Go-home Flight Return Time (sec)': 0,
                        'Aircraft Smart Go-home Flight Time Remaining (sec)': 1497,
                        'Aircraft Smart Go-home Landing Power (%)': 10,
                        'Aircraft Smart Go-home Landing Time (sec)': 0,
                        'Aircraft Smart Go-home Radius (ft)': 19154,
                        'Aircraft Smart Go-home Requesting': false,
                        'Aircraft Smart Go-home Return Power (%)': 15,
                        'Aircraft Speed (mph)': 0,
                        'Aircraft System State Last Updated (ms)': '27',
                        'Aircraft Ultrasonic Altitude (ft)': 0.328084,
                        'Aircraft Ultrasonic On': true,
                        'Aircraft Vel - X (mph)': 0,
                        'Aircraft Vel - Y (mph)': 0,
                        'Aircraft Vel - Z (mph)': 0,
                        'Aircraft Vision On': false,
                        'Date/Time (UTC)': new Date('2018-05-23T20:54:11.000Z'),
                        'Device > Aircraft Distance - XY (ft)': 19.92750419698512,
                        'Device Latitude (Degrees)': '37.77179522443355',
                        'Device Location Last Updated (ms)': '233114',
                        'Device Longitude (Degrees)': '-122.4074760173656',
                        'Elapsed Time (sec)': 233.121,
                        'Gimbal Mode': 'Yaw Follow',
                        'Gimbal Mode Value': 2,
                        'Gimbal Pitch (Degrees)': 0,
                        'Gimbal Pitch at Stop': 0,
                        'Gimbal Roll (Degrees)': 0,
                        'Gimbal Roll at Stop': 0,
                        'Gimbal Status Last Updated (ms)': '26',
                        'Gimbal Yaw (Degrees)': 47.79999923706055,
                        'Gimbal Yaw at Stop': 0,
                        'Home Latitude (Degrees)': 37.77180618457626,
                        'Home Longitude (Degrees)': -122.4074297098351,
                        'Info': '',
                        'LB Signal 1': 'N/A',
                        'LB Signal 2': 'N/A',
                        'LB Signal Last Updated (ms)': 'No Data',
                        'Landing Gear Last Updated (ms)': 'No Data',
                        'Landing Gear Mode': 'Unknown',
                        'Landing Gear Mode Value': 3,
                        'Landing Gear Status': 'Unknown',
                        'Landing Gear Status Value': 0,
                        'Landing Gear is Movable': false,
                        'RC Battery (%)': 88,
                        'RC Battery State Last Updated (ms)': '125',
                        'RC Custom 1': false,
                        'RC Custom 2': false,
                        'RC GPS State Last Updated (ms)': 'No Data',
                        'RC GSP Data is Valid': false,
                        'RC Go Home': false,
                        'RC Horizontal Accuaracy (ft)': 0,
                        'RC Landing Gear': 'No Present',
                        'RC Landing Gear Value': 0,
                        'RC Latitude (Degrees)': 0,
                        'RC Left Horizontal': true,
                        'RC Left Vertical': true,
                        'RC Left Wheel': '0',
                        'RC Longitude (Degrees)': 0,
                        'RC Pause': false,
                        'RC Playback': false,
                        'RC Record': '0',
                        'RC Right Horizontal': true,
                        'RC Right Vertical': true,
                        'RC Right Wheel': '0',
                        'RC Sattelites': false,
                        'RC Shutter': false,
                        'RC Signal 1': 'N/A',
                        'RC Signal 2': 'N/A',
                        'RC Signal Last Updated (ms)': 'No Data',
                        'RC State': '3',
                        'RC State Last Updated (ms)': '26',
                        'RC State Value': 2,
                    },
                    rowIndex: 33,
                });
                expect(events[events.length - 1]).toEqual({
                    meta,
                    rowIndex: 34,
                });
            });
        });
        describe('error log', () => {
            let sampleErrLog;
            let events;
            beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
                const subj = new parser_1.QuasiSubject();
                const parseLogStreamObs = (0, parser_1.parseLogStream)(subj);
                events = [];
                parseLogStreamObs.subscribe((logEvent) => {
                    events.push(_.cloneDeep(logEvent));
                });
                iosLogs.errorLog.split('\n').forEach((line) => subj.next(line));
            }));
            describe('sampleErrLog detail test', () => {
                it('parsed log should have correct falsy value when session info has no value', () => {
                    const { id, start, end, elapsed } = events[events.length - 1].meta.session;
                    expect(id).toEqual('N/A');
                    expect(start).toBeNull();
                });
                it('parsed log should have correct falsy value when aircraft info has no value', () => {
                    const { model, name, firmware } = events[events.length - 1].meta.aircraft;
                    expect(model).toEqual('N/A');
                    expect(name).toEqual('N/A');
                    expect(firmware).toEqual('N/A');
                });
                it('parsed log should have correct falsy value when battery info has no value', () => {
                    const { chargeVolume, remainingLifePercent, discharges, cells, firmware, serialNumber, } = events[events.length - 1].meta.battery;
                    expect(serialNumber).toEqual('N/A');
                    expect(chargeVolume).toEqual(0);
                    expect(remainingLifePercent).toEqual(0);
                    expect(discharges).toEqual(0);
                    expect(cells).toEqual(0);
                    expect(firmware).toEqual('N/A');
                });
                it('parsed log should have correct falsy value when gimbal info has no value', () => {
                    const { firmware } = events[events.length - 1].meta.gimbal;
                    expect(firmware).toEqual('N/A');
                });
                it('parsed log should have correct falsy value when flightController info has no value', () => {
                    const { serialNumber, firmware } = events[events.length - 1].meta.flightController;
                    expect(serialNumber).toEqual('N/A');
                    expect(firmware).toEqual('N/A');
                });
                it('parsed log should have correct falsy value when remoteController info has no value', () => {
                    const { serialNumber, firmware } = events[events.length - 1].meta.remoteController;
                    expect(serialNumber).toEqual('N/A');
                    expect(firmware).toEqual('N/A');
                });
                it('parsed log should have correct falsy value when camera info has no value', () => {
                    const { serialNumber } = events[events.length - 1].meta.camera;
                    expect(serialNumber).toEqual('N/A');
                });
            });
        });
    });
});
//# sourceMappingURL=parser.test.js.map