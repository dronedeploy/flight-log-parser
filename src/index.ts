import * as parse from 'csv-parse';

import { FlightLogRow, FlightLogHeader, FlightLogMetaData } from './types';

const INT_FIELDS = new Set([
  FlightLogHeader.AircraftBatteryCell1Voltage,
  FlightLogHeader.AircraftBatteryCell2Voltage,
  FlightLogHeader.AircraftBatteryCell3Voltage,
  FlightLogHeader.AircraftBatteryCell4Voltage,
  FlightLogHeader.AircraftBatteryCharge,
  FlightLogHeader.AircraftBatteryCurrent,
  FlightLogHeader.AircraftBatteryTemperature,
  FlightLogHeader.AircraftBatteryVoltage,
  FlightLogHeader.AircraftCameraLensFocusModeValue,
  FlightLogHeader.AircraftCameraLensFocusStatusValue,
  FlightLogHeader.AircraftCameraModeValue,
  FlightLogHeader.AircraftFlightModeValue,
  FlightLogHeader.AircraftGPSSignalValue,
  FlightLogHeader.AircraftNoFlyValue,
  FlightLogHeader.AircraftSatellites,
  FlightLogHeader.GimbalModeValue,
]);

const FLOAT_FIELDS = new Set([
  FlightLogHeader.AircraftAltitude,
  FlightLogHeader.AircraftBatteryPercent,
  FlightLogHeader.AircraftCameraSDCardRemainingPercent,
  FlightLogHeader.AircraftHeading,
  FlightLogHeader.AircraftLatitude,
  FlightLogHeader.AircraftLongitude,
  FlightLogHeader.AircraftNoFlyLatitude,
  FlightLogHeader.AircraftNoFlyLongitude,
  FlightLogHeader.AircraftNoFlyRadius,
  FlightLogHeader.AircraftPitch,
  FlightLogHeader.AircraftRoll,
  FlightLogHeader.AircraftSmartGoHomeReturnTime,
  FlightLogHeader.AircraftSmartGoHomeTimeRemaining,
  FlightLogHeader.AircraftSmartGoHomeLandingPower,
  FlightLogHeader.AircraftSmartGoHomeLandingTime,
  FlightLogHeader.AircraftSmartGoHomeReturnPower,
  FlightLogHeader.AircraftSpeed,
  FlightLogHeader.AircraftUltrasonicAltitude,
  FlightLogHeader.DevicetoAircraftDistanceXY,
  FlightLogHeader.ElapsedTime,
  FlightLogHeader.GimbalPitch,
  FlightLogHeader.GimbalPitchAtStop,
  FlightLogHeader.GimbalRoll,
  FlightLogHeader.GimbalRollAtStop,
  FlightLogHeader.GimbalYaw,
  FlightLogHeader.GimbalYawAtStop,
  FlightLogHeader.HomeLatitude,
  FlightLogHeader.HomeLongitude,
  FlightLogHeader.RCBatteryPercent,
  FlightLogHeader.RCLeftHorizontal,
  FlightLogHeader.RCRightHorizontal,
  FlightLogHeader.RCLeftVertical,
  FlightLogHeader.RCRightVertical,
]);

const BOOL_FIELDS = new Set([
  FlightLogHeader.AircraftCameraBurstCapture,
  FlightLogHeader.AircraftCameraIntervalCapture,
  FlightLogHeader.AircraftCameraLensAFAssistant,
  FlightLogHeader.AircraftCameraLensAFEnabled,
  FlightLogHeader.AircraftCameraLensAssistantWorking,
  FlightLogHeader.AircraftCameraOverheated,
  FlightLogHeader.AircraftCameraRawCapture,
  FlightLogHeader.AircraftCameraBurstCapture,
  FlightLogHeader.AircraftCameraRecording,
  FlightLogHeader.AircraftCameraSDCardExists,
  FlightLogHeader.AircraftCameraSensorError,
  FlightLogHeader.AircraftCameraSingleCapture,
  FlightLogHeader.AircraftCameraStoringPhoto,
  FlightLogHeader.AircraftFlying,
  FlightLogHeader.AircraftIMUPreheating,
  FlightLogHeader.AircraftMotorsOn,
  FlightLogHeader.AircraftSmartGoHomeRequesting,
  FlightLogHeader.AircraftUltrasonicOn,
  FlightLogHeader.AircraftVisionOn,
]);

const META_REGEX = {
  appVersion: /^#DroneDeploy\s+(.+)$/,
  sessionId: /^Session ID\s+(.+)$/,
  sessionStart: /^Session Start\s+(.+)$/,
  sessionEnd: /^Date\/Time \(UTC\)\s+(.+)$/,
  deviceModel: /^Device Model\s+(.+)$/,
  deviceOS: /^Device Operating System\s+(.+)$/,
  aircraftModel: /^Aircraft Model\s+(.+)$/,
  aircraftName: /^Aircraft Name\s+(.+)$/,
  aircraftFirmware: /^Aircraft Firmware\s+(.+)$/,
  batteryChargeVolume: /^Full Charge Volume \(mAh\)\s+(.+)$/,
  batteryRemainingLife: /^Remaining Life \(%\)\s+(.+)$/,
  batteryDischarges: /^Discharges\s+(.+)$/,
  batteryCells: /^Battery Cells Number\s+(.+)$/,
  batteryFirmware: /^Battery Firmware\s+(.+)$/,
  fcSerialNumber: /^Flight Controller Serial Number\s+(.+)$/,
  fcFirmware: /^Flight Controller Firmware\s+(.+)$/,
  gimbalFirmware: /^Gimbal Firmware\s+(.+)$/,
  rcSerialNumber: /^Remote Control Serial Number\s+(.+)$/,
  rcFirmware: /^Remote Control Firmware\s+(.+)$/,
  cameraSerialNumber: /^Camera Serial Number\s+(.+)$/,
  elapsedTime: /^Elapsed Time \(sec\)\s+(.+)$/,
};

export const readFile = (file: File): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('error', (err: ErrorEvent) => reject(err));

    reader.addEventListener('loadend', () => {
      const str: string = reader.result;
      const lines = str.split('\n');

      if (lines[lines.length - 1] === '') {
        lines.pop();
      }

      resolve(lines);
    });

    reader.readAsText(file);
  });
};

export const parseLog = (lines: string[]): Promise<FlightLogRow[]> => {
  const text = lines.join('\n');
  const options = {
    delimiter: '\t',
    from: 1,
    relax_column_count: true,
  };

  return new Promise((resolve, reject) => {
    parse(text, options, (err, result: string[]) => {
      if (err) {
        return reject(err);
      }

      const [headers, ...rows] = result;

      const logs = rows
        // sometimes we have junk data in our logs ¯\_(ツ)_/¯
        // .filter((row) => row.length === headers.length)
        .map((row) => {
          const log = {};

          for (let i = 0; i < headers.length; i++) {
            const header = headers[i].trim() as FlightLogHeader;
            let value: any = row[i];

            if (INT_FIELDS.has(header)) {
              value = parseInt(value, 10);
            }

            if (FLOAT_FIELDS.has(header)) {
              value = parseFloat(value);
            }

            if (BOOL_FIELDS.has(header)) {
              value = value !== '0';
            }

            // android multiplies the heading by 1000 ¯\_(ツ)_/¯
            if (header === FlightLogHeader.AircraftHeading && Math.abs(value) > 360) {
              value = value / 1000;
            }

            log[header] = value;
          }

          return log as FlightLogRow;
        });

      resolve(logs);
    });
  });
};

const findMatch = (search: string[], regex: RegExp) => {
  let match;

  for (let str of search) {
    match = str.match(regex);

    if (match) {
      break;
    }
  }

  if (!match) {
    return 'N/A';
  }

  return match[1];
};

export const parseMetaData = (headers: string[], footers: string[]): FlightLogMetaData => {
  const meta = [...headers, ...footers];

  return {
    appVersion: findMatch(meta, META_REGEX.appVersion),
    session: {
      id: findMatch(meta, META_REGEX.sessionId),
      start: new Date(findMatch(meta, META_REGEX.sessionStart)),
      end: new Date(findMatch(meta, META_REGEX.sessionEnd)),
      elapsed: parseFloat(findMatch(meta, META_REGEX.elapsedTime)),
    },
    device: {
      model: findMatch(meta, META_REGEX.deviceModel),
      os: findMatch(meta, META_REGEX.deviceOS),
    },
    aircraft: {
      model: findMatch(meta, META_REGEX.aircraftModel),
      name: findMatch(meta, META_REGEX.aircraftName),
      firmware: findMatch(meta, META_REGEX.aircraftFirmware),
    },
    battery: {
      chargeVolume: parseInt(findMatch(meta, META_REGEX.batteryChargeVolume), 10),
      remainingLifePercent: parseInt(findMatch(meta, META_REGEX.batteryRemainingLife), 10),
      discharges: parseInt(findMatch(meta, META_REGEX.batteryDischarges), 10),
      cells: parseInt(findMatch(meta, META_REGEX.batteryCells), 10),
      firmware: findMatch(meta, META_REGEX.batteryFirmware),
    },
    flightController: {
      serialNumber: findMatch(meta, META_REGEX.fcSerialNumber),
      firmware: findMatch(meta, META_REGEX.fcFirmware),
    },
    gimbal: {
      firmware: findMatch(meta, META_REGEX.gimbalFirmware),
    },
    remoteController: {
      serialNumber: findMatch(meta, META_REGEX.rcSerialNumber),
      firmware: findMatch(meta, META_REGEX.rcFirmware),
    },
    camera: {
      serialNumber: findMatch(meta, META_REGEX.cameraSerialNumber),
    },
  };
};

