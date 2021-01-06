"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const path_1 = require("path");
const fs_1 = require("fs");
const util_1 = require("util");
const parser_1 = require("../parser");
const readFileAsync = util_1.promisify(fs_1.default.readFile);
const jsonInfoLogFilePath = path_1.default.join(__dirname, '../../testlog/json-info.log');
const jsonInfoLogFilePath2 = path_1.default.join(__dirname, '../../testlog/json-info-2-plans.log');
describe('Test parseLog on log file with JSON Info column', () => {
    let log;
    let log2;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        log = yield readFileAsync(jsonInfoLogFilePath, { encoding: 'utf-8' });
        log2 = yield readFileAsync(jsonInfoLogFilePath2, { encoding: 'utf-8' });
    }));
    it('log files exists', () => __awaiter(this, void 0, void 0, function* () {
        expect(log).toBeTruthy();
        expect(log2).toBeTruthy();
    }));
    describe('parsed json-info log', () => {
        let metadata;
        const rows = [];
        const info = [];
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            const lines = log.split('\n');
            const subject = new parser_1.QuasiSubject();
            const parse = parser_1.parseLogStream(subject);
            parse.subscribe((event) => {
                metadata = (event.meta) ? event.meta : metadata;
                if (event.row)
                    rows.push(event.row);
                if (event.info)
                    info.push(event.info);
            });
            lines.forEach(l => subject.next(l));
            subject.complete();
        }));
        it('should have correct metadata', () => __awaiter(this, void 0, void 0, function* () {
            const expected = {
                "aircraft": {
                    "firmware": "Fake Aircraft Firmware Package",
                    "model": "Phantom 4 Pro",
                    "name": "Fake Aircraft Name"
                },
                "appVersion": "4.21.0.1517",
                "battery": {
                    "cells": 0,
                    "chargeVolume": 1,
                    "discharges": 4,
                    "firmware": "Fake Battery Firmware",
                    "remainingLifePercent": 1,
                    "serialNumber": "Fake Battery Serial"
                },
                "camera": {
                    "serialNumber": "Fake Camera Serial"
                },
                "device": {
                    "model": "iPad",
                    "os": "iOS 14.1",
                    "platform": "N/A"
                },
                "flightController": {
                    "firmware": "Fake FC Firwmare",
                    "serialNumber": "Fake FC Serial"
                },
                "gimbal": {
                    "firmware": "Fake Gimbal Firmware"
                },
                "remoteController": {
                    "firmware": "Fake RC Firmware",
                    "serialNumber": "Fake RC Serial"
                },
                "session": {
                    "elapsed": 221.819,
                    "end": parser_1.fromUtcDateStr("2020-11-13T01:16:22.000Z"),
                    "id": "unknown_plan_id",
                    "start": parser_1.fromUtcDateStr("2020-11-13T01:12:40.000Z")
                },
                "user": {
                    "organizationId": "5ce4361f919c5f0001530f71",
                    "userId": "58adcdaff6b11d0001fff143"
                }
            };
            expect(metadata).toEqual(expected);
        }));
        it('should have correct flight log rows', () => __awaiter(this, void 0, void 0, function* () {
            expect(rows.length).toEqual(1170);
        }));
        it('should have correct JSON Info', () => __awaiter(this, void 0, void 0, function* () {
            expect(info.length).toEqual(1);
            expect(info[0].length).toEqual(2);
            expect(info[0][0]).toEqual({ message: "Mission did take off" });
            expect(info[0][1]).toEqual({
                planId: "5faddd83440520a955fb31c2",
                projectId: "5e5da0be976932beb266c15f",
                templateId: "5f1b24bb3fd4e17d4952cf4b"
            });
        }));
    });
    describe('parsed json-info log with 2 plans', () => {
        let metadata;
        const rows = [];
        const info = [];
        beforeAll(() => __awaiter(this, void 0, void 0, function* () {
            const lines = log2.split('\n');
            const subject = new parser_1.QuasiSubject();
            const parse = parser_1.parseLogStream(subject);
            parse.subscribe((event) => {
                metadata = (event.meta) ? event.meta : metadata;
                if (event.row)
                    rows.push(event.row);
                if (event.info)
                    info.push(event.info);
            });
            lines.forEach(l => subject.next(l));
            subject.complete();
        }));
        it('should have 2 plans', () => {
            expect(info.length).toEqual(2);
        });
    });
});
//# sourceMappingURL=json-info.test.js.map