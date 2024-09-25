(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stream')) :
  typeof define === 'function' && define.amd ? define(['exports', 'stream'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.flightLogParser = {}));
})(this, (function (exports) { 'use strict';

  exports.FlightLogHeader = void 0;
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
      FlightLogHeader["CompassIndex"] = "Compass Index";
      FlightLogHeader["CompassSensorValue"] = "Compass Sensor Value";
      FlightLogHeader["CompassState"] = "Compass State";
      FlightLogHeader["CompassStateLastUpdated"] = "Compass State Last Updated (ms)";
      FlightLogHeader["CompassCalibrationState"] = "Compass Calibration State";
      FlightLogHeader["CompassCalibrationLastUpdated"] = "Compass Calibration Last Updated (ms)";
      FlightLogHeader["DeviceToAircraftDistance"] = "Device > Aircraft Distance - XY (ft)";
  })(exports.FlightLogHeader || (exports.FlightLogHeader = {}));
  // based off of types in ios/android SDK FlightMode enums
  const FLIGHT_MODE_MAPPING_V4 = {
      0: 'Manual',
      1: 'Attitude',
      2: 'Attitude Course Lock',
      3: 'Attitude Hover',
      4: 'Hover',
      5: 'GPS Brake',
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
  const FLIGHT_MODE_MAPPING_V5 = {
      0: 'Manual',
      1: 'Attitude',
      2: 'GPS Normal',
      3: 'POI',
      4: 'Takeoff Ready',
      5: 'Auto Takeoff',
      6: 'Auto Landing',
      7: 'Waypoint',
      8: 'Go Home',
      9: 'Virtual Stick',
      10: 'Smart Flight',
      11: 'Pano',
      12: 'GPS Sport',
      13: 'GPS Tripod',
      14: 'Auto Avoidance',
      15: 'Smart Fly',
      16: 'Force Landing',
      17: 'Attitude Landing',
      18: 'Click Go',
      19: 'Cinematic',
      20: 'Draw',
      21: 'GPS Follow Me',
      22: 'GPS Novice',
      23: 'Quick Movie',
      24: 'Tap Fly',
      25: 'Master Shot',
      26: 'APAS',
      27: 'Timelapse',
      28: 'Motors Start',
      29: 'Unknown',
  };

  Buffer.from([239, 187, 191]);

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
  const DATE_FIELDS = new Set([
      exports.FlightLogHeader.DateTime,
  ]);

  const syncParse = require('csv-parse/lib/sync');
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
      footerLines: /^#Flight Recorder Session End|^Date\/Time \(UTC\)|^Elapsed Time \(sec\)/,
      gimbalFirmware: /^Gimbal Firmware\s+(.+)$/,
      rcSerialNumber: /^Remote Control Serial Number\s+(.+)$/,
      rcFirmware: /^Remote Control Firmware\s+(.+)$/,
      cameraSerialNumber: /^Camera Serial Number\s+(.+)$/,
      elapsedTime: /^Elapsed Time \(sec\)\s+(.+)$/,
      userId: /^User ID\s+(.+)$/,
      organizationId: /^Organization ID\s+(.+)$/,
      platform: /^Platform\s+(.+)$/,
  };
  class QuasiSubject {
      constructor() {
          this.subscribers = [];
          this.errorSubscribers = [];
          this.completionSubscribers = [];
          this.isFinished = false;
      }
      next(value) {
          if (this.isFinished) {
              return;
          }
          this.subscribers.forEach((s) => s(value));
      }
      complete() {
          if (this.isFinished) {
              return;
          }
          this.isFinished = true;
          this.completionSubscribers.forEach((sub) => sub());
      }
      error(error) {
          if (this.isFinished) {
              return;
          }
          this.errorSubscribers.forEach((errSub) => errSub(error));
          this.complete();
      }
      subscribe(sub, errSub, completionSub) {
          this.subscribers.push(sub);
          if (errSub) {
              this.errorSubscribers.push(errSub);
          }
          if (completionSub) {
              this.completionSubscribers.push(completionSub);
          }
      }
      toPromise() {
          const source = this;
          return new Promise(function (resolve, reject) {
              let value;
              source.subscribe(function (v) {
                  value = v;
              }, reject, function () {
                  resolve(value);
              });
          });
      }
  }
  function parseLogStream(logStream) {
      const headerMetaLines = [];
      let meta = {};
      let rowHeaderLine;
      let row;
      const progress = { index: 0, completed: false };
      let end;
      const result = new QuasiSubject();
      logStream.subscribe((line) => {
          line = line.trim();
          if (!line.length) {
              return;
          }
          if (!rowHeaderLine) {
              if (line.startsWith(exports.FlightLogHeader.DateTime.split(' ')[0])) { // Strip off timezone.
                  rowHeaderLine = line;
                  meta = parseMetaData(headerMetaLines, []);
                  result.next({
                      meta,
                      rowIndex: progress.index
                  });
              }
              else {
                  headerMetaLines.push(line);
                  progress.index++;
              }
              return;
          }
          if (META_REGEX.footerLines.test(line)) {
              if (META_REGEX.sessionEnd.test(line)) {
                  end = fromUtcDateStr(findMatch([line], META_REGEX.sessionEnd));
              }
              else if (META_REGEX.elapsedTime.test(line)) {
                  const elapsed = findMatch([line], META_REGEX.elapsedTime);
                  // This is the end of the parsing. Because normal lines are parsed through a Promise, they will be delivered
                  // asynchronously. So we must ensure that this result is also delivered asynchronously.
                  setTimeout(() => {
                      const parsedElapsed = elapsed === 'N/A' ? 0 : parseFloat(elapsed);
                      if (parsedElapsed) {
                          meta.session.elapsed = parsedElapsed;
                      }
                      if (end) {
                          meta.session.end = end;
                      }
                      result.next({
                          meta,
                          rowIndex: progress.index++,
                      });
                      result.complete();
                      progress.completed = true;
                  }, 0);
              }
          }
          else {
              parseBody([rowHeaderLine, line]).then((rows) => {
                  row = rows[0];
                  meta.session.end = row[exports.FlightLogHeader.DateTime];
                  meta.session.elapsed = row[exports.FlightLogHeader.ElapsedTime];
                  result.next({
                      meta,
                      rowIndex: progress.index++,
                      row,
                      info: parseJsonInfo(row.Info), // Parsed Info column, if the column was populated with a JSON array.
                  });
              });
          }
      }, (err) => { console.error('parsing error: ' + err); result.complete(); }, () => {
          if (!progress.completed) {
              setTimeout(() => {
                  result.complete();
                  progress.completed = true;
              }, 0);
          }
      });
      return result;
  }
  function parseLog(log) {
      const lines = log.split('\n');
      const subject = new QuasiSubject();
      const parse = parseLogStream(subject);
      const flightLog = {
          metaData: {},
          rows: [],
          infos: []
      };
      parse.subscribe((event) => {
          // The metadata is updated as the file is parsed, so always grab the latest one.
          flightLog.metaData = (event.meta) ? event.meta : flightLog.metaData;
          if (event.row) {
              flightLog.rows.push(event.row);
          }
          if (event.info) {
              // @ts-ignore
              flightLog.infos.push(event.info);
          }
      });
      lines.forEach(l => subject.next(l));
      subject.complete();
      return new Promise((resolve, reject) => {
          parse.toPromise().then(() => resolve(flightLog)).catch((reason => reject(reason)));
      });
  }
  function parseBody(lines, sync) {
      const text = lines.join('\n');
      const options = {
          delimiter: '\t',
          escape: null,
          from: 1,
          quote: null,
          relax_column_count: true,
      };
      return new Promise((resolve, reject) => {
          const onResults = (err, result) => {
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
                      if (DATE_FIELDS.has(header)) {
                          value = fromUtcDateStr(value);
                      }
                      log[header] = value;
                  }
                  return log;
              });
              resolve(logs);
          };
          {
              const results = syncParse(text, options);
              onResults(undefined, results);
          }
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
  function isValidDate(d) {
      return d instanceof Date && !isNaN(d);
  }
  function fromUtcDateStr(utcDateStr) {
      if (isValidDate(utcDateStr)) {
          return utcDateStr;
      }
      const isBadDate = !utcDateStr || !utcDateStr.trim().length || utcDateStr === 'N/A';
      if (isBadDate) {
          return null;
      }
      if (!/Z$/.test(utcDateStr)) {
          utcDateStr = utcDateStr + '.000Z';
      }
      return new Date(utcDateStr);
  }
  function parseMetaData(headers, footers) {
      const meta = [...headers, ...footers];
      let end = findMatch(meta, META_REGEX.sessionEnd);
      let elapsed = findMatch(meta, META_REGEX.elapsedTime);
      // if we weren't able to parse an end date or an elapsed time from our footer (which is really just the last three
      // lines of the log file), it's likely that we have a truncated log file. if that's the case, we can still salvage
      // some valid data by parsing the date and elapsed time from the very last log row in the file, which is what we're
      // doing below. it's pretty brittle, but it's preferred to having an invalid end date and a NaN elapsed time.
      if ((end === 'N/A' || elapsed === 'N/A') && footers.length > 0) {
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
              start: fromUtcDateStr(findMatch(meta, META_REGEX.sessionStart)),
              end: fromUtcDateStr(end),
              elapsed: elapsed === 'N/A' ? 0 : parseFloat(elapsed),
          },
          device: {
              model: findMatch(meta, META_REGEX.deviceModel),
              os: findMatch(meta, META_REGEX.deviceOS).replace(/\t/g, ' '),
              platform: findMatch(meta, META_REGEX.platform),
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
          user: {
              userId: findMatch(meta, META_REGEX.userId),
              organizationId: findMatch(meta, META_REGEX.organizationId),
          },
      };
  }
  /**
   * Parse out the given string and return an object if the string is JSON, return undefined otherwise.
   *
   * @param info
   */
  function parseJsonInfo(info) {
      if (!info) {
          return undefined;
      }
      try {
          return JSON.parse(info);
      }
      catch (e) {
          return undefined;
      }
  }

  exports.FLIGHT_MODE_MAPPING_V4 = FLIGHT_MODE_MAPPING_V4;
  exports.FLIGHT_MODE_MAPPING_V5 = FLIGHT_MODE_MAPPING_V5;
  exports.QuasiSubject = QuasiSubject;
  exports.fromUtcDateStr = fromUtcDateStr;
  exports.parseLog = parseLog;
  exports.parseLogStream = parseLogStream;

}));
//# sourceMappingURL=flight-log-parser.js.map
