(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.flightLogParser = {})));
}(this, (function (exports) { 'use strict';

  (function (FlightLogHeader) {
      FlightLogHeader["DateTime"] = "Date/Time (UTC)";
      FlightLogHeader["ElapsedTime"] = "Elapsed Time (sec)";
      FlightLogHeader["Info"] = "Info";
      FlightLogHeader["DeviceLatitude"] = "Device Latitude (Degrees)";
      FlightLogHeader["DeviceLongitude"] = "Device Longitude (Degrees)";
      FlightLogHeader["DeviceLocationLastUpdated"] = "Device Location Last Updated (ms)";
      FlightLogHeader["AircraftBatteryPowerPercent"] = "Aircraft Battery Power (%)";
      FlightLogHeader["AircraftBatteryCharge"] = "Aircraft Battery Charge (mAh)";
      FlightLogHeader["AircraftBatteryCurrent"] = "Aircraft Battery Current (mA)";
      FlightLogHeader["AircraftBatteryVoltage"] = "Aircraft Battery Voltage (mV)";
      FlightLogHeader["AircraftBatteryTemperature"] = "Aircraft Battery Temperature (Fahrenheit)";
      FlightLogHeader["AircraftBatteryLastUpdated"] = "Aircraft Battery Last Updated (ms)";
      FlightLogHeader["AircraftBatteryCell1Voltage"] = "Aircraft Battery Cell 1 Voltage";
      FlightLogHeader["AircraftBatteryCell2Voltage"] = "Aircraft Battery Cell 2 Voltage";
      FlightLogHeader["AircraftBatteryCell3Voltage"] = "Aircraft Battery Cell 3 Voltage";
      FlightLogHeader["AircraftBatteryCell4Voltage"] = "Aircraft Battery Cell 4 Voltage";
      FlightLogHeader["AircraftBatteryCellVoltageLastUpdated"] = "Aircraft Battery Cell Voltage Last Updated (ms)";
      FlightLogHeader["AircraftLatitude"] = "Aircraft Latitude (Degrees)";
      FlightLogHeader["AircraftLongitude"] = "Aircraft Longitude (Degrees)";
      FlightLogHeader["AircraftSpeed"] = "Aircraft Speed (mph)";
      FlightLogHeader["AircraftBarometricAltitude"] = "Aircraft Barometric Altitude (ft)";
      FlightLogHeader["AircraftHeading"] = "Aircraft Heading (Degrees)";
      FlightLogHeader["AircraftVelocityX"] = "Aircraft Vel - X (mph)";
      FlightLogHeader["AircraftVelocityY"] = "Aircraft Vel - Y (mph)";
      FlightLogHeader["AircraftVelocityZ"] = "Aircraft Vel - Z (mph)";
      FlightLogHeader["AircraftPitch"] = "Aircraft Pitch (Degrees)";
      FlightLogHeader["AircraftRoll"] = "Aircraft Roll (Degrees)";
      FlightLogHeader["AircraftSatellites"] = "Aircraft Satellites";
      FlightLogHeader["AircraftMotorsOn"] = "Aircraft Motors On";
      FlightLogHeader["AircraftFlying"] = "Aircraft Flying";
      FlightLogHeader["AircraftFlightMode"] = "Aircraft Flight Mode";
      FlightLogHeader["AircraftFlightModeValue"] = "Aircraft Flight Mode Value";
      FlightLogHeader["AircraftIMUPreheating"] = "Aircraft IMU Preheating";
      FlightLogHeader["AircraftUltrasonicOn"] = "Aircraft Ultrasonic On";
      FlightLogHeader["AircraftUltrasonicAltitude"] = "Aircraft Ultrasonic Altitude (ft)";
      FlightLogHeader["AircraftVisionOn"] = "Aircraft Vision On";
      FlightLogHeader["AircraftGPSSignal"] = "Aircraft GPS Signal";
      FlightLogHeader["AircraftGPSSignalValue"] = "Aircraft GPS Signal Value";
      FlightLogHeader["AircraftNoFly"] = "Aircraft No-fly";
      FlightLogHeader["AircraftNoFlyValue"] = "Aircraft No-fly Value";
      FlightLogHeader["AircraftNoFlyLatitude"] = "Aircraft No-fly Latitude (Degrees)";
      FlightLogHeader["AircraftNoFlyLongitude"] = "Aircraft No-fly Longitude (Degrees)";
      FlightLogHeader["AircraftNoFlyRadius"] = "Aircraft No-fly Radius (ft)";
      FlightLogHeader["HomeLatitude"] = "Home Latitude (Degrees)";
      FlightLogHeader["HomeLongitude"] = "Home Longitude (Degrees)";
      FlightLogHeader["AircraftSmartGoHomeFlightTimeRemaining"] = "Aircraft Smart Go-home Flight Time Remaining (sec)";
      FlightLogHeader["AircraftSmartGoHomeFlightReturnTime"] = "Aircraft Smart Go-home Flight Return Time (sec)";
      FlightLogHeader["AircraftSmartGoHomeLandingTime"] = "Aircraft Smart Go-home Landing Time (sec)";
      FlightLogHeader["AircraftSmartGoHomeReturnPower"] = "Aircraft Smart Go-home Return Power (%)";
      FlightLogHeader["AircraftSmartGoHomeLandingPower"] = "Aircraft Smart Go-home Landing Power (%)";
      FlightLogHeader["AircraftSmartGoHomeRadius"] = "Aircraft Smart Go-home Radius (ft)";
      FlightLogHeader["AircraftSmartGoHomeCountdown"] = "Aircraft Smart Go-home Countdown (sec)";
      FlightLogHeader["AircraftSmartGoHomeRequesting"] = "Aircraft Smart Go-home Requesting";
      FlightLogHeader["AircraftSystemStateLastUpdated"] = "Aircraft System State Last Updated (ms)";
      FlightLogHeader["GimbalPitch"] = "Gimbal Pitch (Degrees)";
      FlightLogHeader["GimbalRoll"] = "Gimbal Roll (Degrees)";
      FlightLogHeader["GimbalYaw"] = "Gimbal Yaw (Degrees)";
      FlightLogHeader["GimbalMode"] = "Gimbal Mode";
      FlightLogHeader["GimbalModeValue"] = "Gimbal Mode Value";
      FlightLogHeader["GimbalPitchAtStop"] = "Gimbal Pitch at Stop";
      FlightLogHeader["GimbalRollAtStop"] = "Gimbal Roll at Stop";
      FlightLogHeader["GimbalYawAtStop"] = "Gimbal Yaw at Stop";
      FlightLogHeader["GimbalStatusLastUpdated"] = "Gimbal Status Last Updated (ms)";
      FlightLogHeader["LandingGearIsMovable"] = "Landing Gear is Movable";
      FlightLogHeader["LandingGearStatus"] = "Landing Gear Status";
      FlightLogHeader["LandingGearStatusValue"] = "Landing Gear Status Value";
      FlightLogHeader["LandingGearMode"] = "Landing Gear Mode";
      FlightLogHeader["LandingGearModeValue"] = "Landing Gear Mode Value";
      FlightLogHeader["LandingGearLastUpdated"] = "Landing Gear Last Updated (ms)";
      FlightLogHeader["RCState"] = "RC State";
      FlightLogHeader["RCStateValue"] = "RC State Value";
      FlightLogHeader["RCLeftHorizontal"] = "RC Left Horizontal";
      FlightLogHeader["RCLeftVertical"] = "RC Left Vertical";
      FlightLogHeader["RCRightHorizontal"] = "RC Right Horizontal";
      FlightLogHeader["RCRightVertical"] = "RC Right Vertical";
      FlightLogHeader["RCLeftWheel"] = "RC Left Wheel";
      FlightLogHeader["RCRightWheel"] = "RC Right Wheel";
      FlightLogHeader["RCLandingGear"] = "RC Landing Gear";
      FlightLogHeader["RCLandingGearValue"] = "RC Landing Gear Value";
      FlightLogHeader["RCGoHome"] = "RC Go Home";
      FlightLogHeader["RCRecord"] = "RC Record ";
      FlightLogHeader["RCShutter"] = "RC Shutter";
      FlightLogHeader["RCPlayback"] = "RC Playback";
      FlightLogHeader["RCPause"] = "RC Pause";
      FlightLogHeader["RCCustom1"] = "RC Custom 1";
      FlightLogHeader["RCCustom2"] = "RC Custom 2";
      FlightLogHeader["RCStateLastUpdated"] = "RC State Last Updated (ms)";
      FlightLogHeader["RCBatteryPercentRemaining"] = "RC Battery (%)";
      FlightLogHeader["RCBatteryStateLastUpdated"] = "RC Battery State Last Updated (ms)";
      FlightLogHeader["RCSattelites"] = "RC Sattelites";
      FlightLogHeader["RCHorizontalAccuaracy"] = "RC Horizontal Accuaracy (ft)";
      FlightLogHeader["RCLatitude"] = "RC Latitude (Degrees)";
      FlightLogHeader["RCLongitude"] = "RC Longitude (Degrees)";
      FlightLogHeader["RCGSPDataIsValid"] = "RC GSP Data is Valid";
      FlightLogHeader["RCGPSStateLastUpdated"] = "RC GPS State Last Updated (ms)";
      FlightLogHeader["RCSignal1"] = "RC Signal 1";
      FlightLogHeader["RCSignal2"] = "RC Signal 2";
      FlightLogHeader["RCSignalLastUpdated"] = "RC Signal Last Updated (ms)";
      FlightLogHeader["LBSignal1"] = "LB Signal 1";
      FlightLogHeader["LBSignal2"] = "LB Signal 2";
      FlightLogHeader["LBSignalLastUpdated"] = "LB Signal Last Updated (ms)";
      FlightLogHeader["AircraftCameraMode"] = "Aircraft Camera Mode";
      FlightLogHeader["AircraftCameraModeValue"] = "Aircraft Camera Mode Value";
      FlightLogHeader["AircraftCameraOverheated"] = "Aircraft Camera Overheated";
      FlightLogHeader["AircraftCameraSensorError"] = "Aircraft Camera Sensor Error";
      FlightLogHeader["AircraftCameraRecording"] = "Aircraft Camera Recording";
      FlightLogHeader["AircraftCameraRawCapture"] = "Aircraft Camera Raw Capture";
      FlightLogHeader["AircraftCameraIntervalCapture"] = "Aircraft Camera Interval Capture";
      FlightLogHeader["AircraftCameraBurstCapture"] = "Aircraft Camera Burst Capture";
      FlightLogHeader["AircraftCameraSingleCapture"] = "Aircraft Camera Single Capture";
      FlightLogHeader["AircraftCameraStoringPhoto"] = "Aircraft Camera Storing Photo";
      FlightLogHeader["AircraftCameraStateLastUpdated"] = "Aircraft Camera State Last Updated (ms)";
      FlightLogHeader["AircraftCameraSDCardExists"] = "Aircraft Camera SD Card Exists";
      FlightLogHeader["AircraftCameraSDCardRemainingPercent"] = "Aircraft Camera SD Card Remaining (%)";
      FlightLogHeader["AircraftCameraSDCardStateLastUpdated"] = "Aircraft Camera SD Card State Last Updated (ms)";
      FlightLogHeader["AircraftCameraChangeableLensSupported"] = "Aircraft Camera Changeable Lens Supported";
      FlightLogHeader["AircraftCameraLensInstalled"] = "Aircraft Camera Lens Installed";
      FlightLogHeader["AircraftCameraLensType"] = "Aircraft Camera Lens Type";
      FlightLogHeader["AircraftCameraLensAFEnabled"] = "Aircraft Camera Lens AF Enabled";
      FlightLogHeader["AircraftCameraLensFocusMode"] = "Aircraft Camera Lens Focus Mode";
      FlightLogHeader["AircraftCameraLensFocusModeValue"] = "Aircraft Camera Lens Focus Mode Value";
      FlightLogHeader["AircraftCameraLensFocusStatus"] = "Aircraft Camera Lens Focus Status";
      FlightLogHeader["AircraftCameraLensFocusStatusValue"] = "Aircraft Camera Lens Focus Status Value";
      FlightLogHeader["AircraftCameraLensMFAssistant"] = "Aircraft Camera Lens MF Assistant";
      FlightLogHeader["AircraftCameraLensAFAssistant"] = "Aircraft Camera Lens AF Assistant";
      FlightLogHeader["AircraftCameraLensAssistantWorking"] = "Aircraft Camera Lens Assistant Working";
      FlightLogHeader["AircraftCameraLensStateLastUpdated"] = "Aircraft Camera Lens State Last Updated (ms)";
      FlightLogHeader["DeviceToAircraftDistance"] = "Device > Aircraft Distance - XY (ft)";
  })(exports.FlightLogHeader || (exports.FlightLogHeader = {}));
  // based off of types in ios/android SDK FlightMode enums
  const FLIGHT_MODE_MAPPING = {
      0: 'Manual',
      1: 'Attitude',
      2: 'Attitude Course Lock',
      3: 'Attitude Hover',
      4: 'Hover',
      5: 'GPS Blake',
      6: 'GPS Attitude',
      7: 'GPS Course Lock',
      8: 'GPS Home',
      9: 'GPS Hotpoint',
      10: 'Assisted Takeoff',
      11: 'Auto Takeoff',
      12: 'Auto Landing',
      13: 'Attitude Landing',
      14: 'GPS Waypoint',
      15: 'Go Home',
      16: 'Click Go',
      17: 'Joystick',
      18: 'Attitude Limited',
      19: 'Cinematic',
      23: 'Attitude Limited',
      24: 'Draw',
      25: 'GPS Follow Me',
      26: 'ActiveTrack',
      27: 'TapFly',
      28: 'Pano',
      29: 'Farming',
      30: 'FPV',
      31: 'GPS Sport',
      32: 'GPS Novice',
      33: 'Confirm Landing',
      35: 'Terrain Follow',
      36: 'Palm Control',
      37: 'Quick Shot',
      38: 'Tripod',
      39: 'ActiveTrack Spotlight',
      41: 'Motors Just Started',
      43: 'GPS Gentle',
      255: 'Unknown',
  };

  const INT_FIELDS = new Set([
      exports.FlightLogHeader.AircraftBatteryCell1Voltage,
      exports.FlightLogHeader.AircraftBatteryCell2Voltage,
      exports.FlightLogHeader.AircraftBatteryCell3Voltage,
      exports.FlightLogHeader.AircraftBatteryCell4Voltage,
      exports.FlightLogHeader.AircraftBatteryCharge,
      exports.FlightLogHeader.AircraftBatteryCurrent,
      exports.FlightLogHeader.AircraftBatteryTemperature,
      exports.FlightLogHeader.AircraftBatteryVoltage,
      exports.FlightLogHeader.AircraftCameraLensFocusModeValue,
      exports.FlightLogHeader.AircraftCameraLensFocusStatusValue,
      exports.FlightLogHeader.AircraftCameraModeValue,
      exports.FlightLogHeader.AircraftFlightModeValue,
      exports.FlightLogHeader.AircraftGPSSignalValue,
      exports.FlightLogHeader.AircraftNoFlyValue,
      exports.FlightLogHeader.AircraftSatellites,
      exports.FlightLogHeader.GimbalModeValue,
      exports.FlightLogHeader.AircraftSmartGoHomeRadius,
      exports.FlightLogHeader.AircraftSmartGoHomeCountdown,
      exports.FlightLogHeader.AircraftVelocityX,
      exports.FlightLogHeader.AircraftVelocityY,
      exports.FlightLogHeader.AircraftVelocityZ,
      exports.FlightLogHeader.RCHorizontalAccuaracy,
      exports.FlightLogHeader.RCLatitude,
      exports.FlightLogHeader.RCLongitude,
      exports.FlightLogHeader.LandingGearStatusValue,
      exports.FlightLogHeader.LandingGearModeValue,
      exports.FlightLogHeader.RCStateValue,
      exports.FlightLogHeader.RCLandingGearValue,
  ]);
  const FLOAT_FIELDS = new Set([
      exports.FlightLogHeader.AircraftBarometricAltitude,
      exports.FlightLogHeader.AircraftBatteryPowerPercent,
      exports.FlightLogHeader.AircraftCameraSDCardRemainingPercent,
      exports.FlightLogHeader.AircraftHeading,
      exports.FlightLogHeader.AircraftLatitude,
      exports.FlightLogHeader.AircraftLongitude,
      exports.FlightLogHeader.AircraftNoFlyLatitude,
      exports.FlightLogHeader.AircraftNoFlyLongitude,
      exports.FlightLogHeader.AircraftNoFlyRadius,
      exports.FlightLogHeader.AircraftPitch,
      exports.FlightLogHeader.AircraftRoll,
      exports.FlightLogHeader.AircraftSmartGoHomeFlightReturnTime,
      exports.FlightLogHeader.AircraftSmartGoHomeFlightTimeRemaining,
      exports.FlightLogHeader.AircraftSmartGoHomeLandingPower,
      exports.FlightLogHeader.AircraftSmartGoHomeLandingTime,
      exports.FlightLogHeader.AircraftSmartGoHomeReturnPower,
      exports.FlightLogHeader.AircraftSpeed,
      exports.FlightLogHeader.AircraftUltrasonicAltitude,
      exports.FlightLogHeader.DeviceToAircraftDistance,
      exports.FlightLogHeader.ElapsedTime,
      exports.FlightLogHeader.GimbalPitch,
      exports.FlightLogHeader.GimbalPitchAtStop,
      exports.FlightLogHeader.GimbalRoll,
      exports.FlightLogHeader.GimbalRollAtStop,
      exports.FlightLogHeader.GimbalYaw,
      exports.FlightLogHeader.GimbalYawAtStop,
      exports.FlightLogHeader.HomeLatitude,
      exports.FlightLogHeader.HomeLongitude,
      exports.FlightLogHeader.RCBatteryPercentRemaining,
      exports.FlightLogHeader.RCLeftHorizontal,
      exports.FlightLogHeader.RCRightHorizontal,
      exports.FlightLogHeader.RCLeftVertical,
      exports.FlightLogHeader.RCRightVertical,
  ]);
  const BOOL_FIELDS = new Set([
      exports.FlightLogHeader.AircraftCameraBurstCapture,
      exports.FlightLogHeader.AircraftCameraIntervalCapture,
      exports.FlightLogHeader.AircraftCameraLensAFAssistant,
      exports.FlightLogHeader.AircraftCameraLensAFEnabled,
      exports.FlightLogHeader.AircraftCameraLensAssistantWorking,
      exports.FlightLogHeader.AircraftCameraOverheated,
      exports.FlightLogHeader.AircraftCameraRawCapture,
      exports.FlightLogHeader.AircraftCameraBurstCapture,
      exports.FlightLogHeader.AircraftCameraRecording,
      exports.FlightLogHeader.AircraftCameraSDCardExists,
      exports.FlightLogHeader.AircraftCameraSensorError,
      exports.FlightLogHeader.AircraftCameraSingleCapture,
      exports.FlightLogHeader.AircraftCameraStoringPhoto,
      exports.FlightLogHeader.AircraftFlying,
      exports.FlightLogHeader.AircraftIMUPreheating,
      exports.FlightLogHeader.AircraftMotorsOn,
      exports.FlightLogHeader.AircraftSmartGoHomeRequesting,
      exports.FlightLogHeader.AircraftUltrasonicOn,
      exports.FlightLogHeader.AircraftVisionOn,
      exports.FlightLogHeader.LandingGearIsMovable,
      exports.FlightLogHeader.RCGoHome,
      exports.FlightLogHeader.RCRecord,
      exports.FlightLogHeader.RCShutter,
      exports.FlightLogHeader.RCPlayback,
      exports.FlightLogHeader.RCPause,
      exports.FlightLogHeader.RCCustom1,
      exports.FlightLogHeader.RCCustom2,
      exports.FlightLogHeader.RCSattelites,
      exports.FlightLogHeader.RCGSPDataIsValid,
      exports.FlightLogHeader.RCLeftHorizontal,
      exports.FlightLogHeader.RCRightHorizontal,
      exports.FlightLogHeader.RCLeftVertical,
      exports.FlightLogHeader.RCRightVertical,
      exports.FlightLogHeader.AircraftCameraChangeableLensSupported,
      exports.FlightLogHeader.AircraftCameraLensInstalled,
      exports.FlightLogHeader.AircraftCameraLensMFAssistant,
  ]);

  const parse = require('csv-parse');
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
      batterySerialNumber: /^Battery Serial Number\s+(.+)$/,
      batteryFirmware: /^Battery Firmware\s+(.+)$/,
      fcSerialNumber: /^Flight Controller Serial Number\s+(.+)$/,
      fcFirmware: /^Flight Controller Firmware\s+(.+)$/,
      gimbalFirmware: /^Gimbal Firmware\s+(.+)$/,
      rcSerialNumber: /^Remote Control Serial Number\s+(.+)$/,
      rcFirmware: /^Remote Control Firmware\s+(.+)$/,
      cameraSerialNumber: /^Camera Serial Number\s+(.+)$/,
      elapsedTime: /^Elapsed Time \(sec\)\s+(.+)$/,
  };
  const LOG_HEADER_LINES = 27;
  const LOG_FOOTER_LINES = 3;
  function parseLog(log) {
      const lines = log.split('\n');
      if (lines[lines.length - 1] === '') {
          lines.pop();
      }
      const header = lines.slice(0, LOG_HEADER_LINES);
      const footer = lines.slice(-LOG_FOOTER_LINES);
      const body = lines.slice(LOG_HEADER_LINES, -LOG_FOOTER_LINES);
      const metaData = parseMetaData(header, footer);
      return parseBody(body).then((rows) => ({
          metaData,
          rows,
      }));
  }
  function parseBody(lines) {
      const text = lines.join('\n');
      const options = {
          delimiter: '\t',
          from: 1,
          relax_column_count: true,
      };
      return new Promise((resolve, reject) => {
          parse(text, options, (err, result) => {
              if (err) {
                  return reject(err);
              }
              const [headers, ...rows] = result;
              const logs = rows.map((row) => {
                  const log = {};
                  for (let i = 0; i < headers.length; i++) {
                      const header = headers[i].trim();
                      let value = row[i];
                      if (INT_FIELDS.has(header)) {
                          value = parseInt(value, 10);
                      }
                      if (FLOAT_FIELDS.has(header)) {
                          value = parseFloat(value);
                      }
                      if (BOOL_FIELDS.has(header)) {
                          value = value !== '0';
                      }
                      log[header] = value;
                  }
                  return log;
              });
              resolve(logs);
          });
      });
  }
  function findMatch(search, regex, isNum) {
      let match;
      for (let str of search) {
          match = str.match(regex);
          if (match) {
              break;
          }
      }
      if (!match) {
          return isNum ? '0' : 'N/A';
      }
      return match[1];
  }
  function parseMetaData(headers, footers) {
      const meta = [...headers, ...footers];
      let end = findMatch(meta, META_REGEX.sessionEnd);
      let elapsed = findMatch(meta, META_REGEX.elapsedTime);
      // if we weren't able to parse an end date or an elapsed time from our footer (which is really just the last three
      // lines of the log file), it's likely that we have a truncated log file. if that's the case, we can still salvage
      // some valid data by parsing the date and elapsed time from the very last log row in the file, which is what we're
      // doing below. it's pretty brittle, but it's preferred to having an invalid end date and a NaN elapsed time.
      if (end === 'N/A' || elapsed === 'N/A') {
          const lastLine = footers[footers.length - 1];
          const pieces = lastLine.split('\t');
          // if we don't have at least two pieces, i don't know what is in `footer` so i'm just going to leave it alone
          if (pieces.length >= 2) {
              end = pieces[0];
              elapsed = pieces[1];
          }
      }
      return {
          appVersion: findMatch(meta, META_REGEX.appVersion),
          session: {
              id: findMatch(meta, META_REGEX.sessionId),
              start: new Date(findMatch(meta, META_REGEX.sessionStart)),
              end: new Date(end),
              elapsed: elapsed === 'N/A' ? 0 : parseFloat(elapsed),
          },
          device: {
              model: findMatch(meta, META_REGEX.deviceModel),
              os: findMatch(meta, META_REGEX.deviceOS).replace(/\t/g, ' '),
          },
          aircraft: {
              model: findMatch(meta, META_REGEX.aircraftModel),
              name: findMatch(meta, META_REGEX.aircraftName),
              firmware: findMatch(meta, META_REGEX.aircraftFirmware),
          },
          battery: {
              chargeVolume: parseInt(findMatch(meta, META_REGEX.batteryChargeVolume, true), 10),
              remainingLifePercent: parseInt(findMatch(meta, META_REGEX.batteryRemainingLife, true), 10),
              discharges: parseInt(findMatch(meta, META_REGEX.batteryDischarges, true), 10),
              cells: parseInt(findMatch(meta, META_REGEX.batteryCells, true), 10),
              firmware: findMatch(meta, META_REGEX.batteryFirmware),
              serialNumber: findMatch(meta, META_REGEX.batterySerialNumber),
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
  }

  exports.FLIGHT_MODE_MAPPING = FLIGHT_MODE_MAPPING;
  exports.parseLog = parseLog;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flight-log-parser.js.map
