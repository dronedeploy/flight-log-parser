import 'jest'
import path from 'path';
import fs from 'fs';
import {promisify} from 'util';
import { fromUtcDateStr, parseLogStream, QuasiSubject } from '../parser';
import { FlightLogMetaData, FlightLogRow } from '../types';

const readFileAsync = promisify(fs.readFile);
const jsonInfoLogFilePath = path.join(__dirname, '../../testlog/json-info.log');
const jsonInfoLogFilePath2 = path.join(__dirname, '../../testlog/json-info-2-plans.log');

describe('Test parseLog on log file with JSON Info column', () => {
  let log: string;
  let log2: string;
  beforeAll(async () => {
    log = await readFileAsync(jsonInfoLogFilePath, { encoding: 'utf-8' });
    log2 = await readFileAsync(jsonInfoLogFilePath2, { encoding: 'utf-8' });
  });

  it('log files exists', async () => {
    expect(log).toBeTruthy();
    expect(log2).toBeTruthy();
  });

  describe('parsed json-info log', () => {
    let metadata: FlightLogMetaData;
    const rows: FlightLogRow[] = [];
    const info: any[] = [];
    beforeAll(async () => {
      const lines = log.split('\n');
      const subject = new QuasiSubject<string>();
      const parse = parseLogStream(subject);
      parse.subscribe((event) => {
        metadata = (event.meta) ? event.meta : metadata;
        if (event.row) rows.push(event.row);
        if (event.info) info.push(event.info);
      });
      lines.forEach(l => subject.next(l));
      subject.complete();
    });

    it('should have correct metadata', async () => {
      const expected =  {
        "aircraft": {
          "firmware": "Fake Aircraft Firmware Package",
          "model": "Phantom 4 Pro",
          "name": "Fake Aircraft Name"
        },
        "appVersion": "4.21.0.1517",
        "isCustomRecord": false,
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
          "end": fromUtcDateStr("2020-11-13T01:16:22.000Z"),
          "id": "unknown_plan_id",
          "start": fromUtcDateStr("2020-11-13T01:12:40.000Z")
        },
        "user": {
          "organizationId": "5ce4361f919c5f0001530f71",
          "userId": "58adcdaff6b11d0001fff143"
        }
      };

      expect(metadata).toEqual(expected);
    });

    it('should have correct flight log rows', async () => {
      expect(rows.length).toEqual(1170);
    });

    it('should have correct JSON Info', async () => {
      expect(info.length).toEqual(1);
      expect(info[0].length).toEqual(2);
      expect(info[0][0]).toEqual({ message: "Mission did take off" });
      expect(info[0][1]).toEqual({
        planId: "5faddd83440520a955fb31c2",
        projectId: "5e5da0be976932beb266c15f",
        templateId: "5f1b24bb3fd4e17d4952cf4b"
      });
    });
  });

  describe('parsed json-info log with 2 plans', () => {
    let metadata: FlightLogMetaData;
    const rows: FlightLogRow[] = [];
    const info: any[] = [];
    beforeAll(async () => {
      const lines = log2.split('\n');
      const subject = new QuasiSubject<string>();
      const parse = parseLogStream(subject);
      parse.subscribe((event) => {
        metadata = (event.meta) ? event.meta : metadata;
        if (event.row) rows.push(event.row);
        if (event.info) info.push(event.info);
      });
      lines.forEach(l => subject.next(l));
      subject.complete();
    });

    it('should have 2 plans', () => {
      expect(info.length).toEqual(2);
    });
  });
});
