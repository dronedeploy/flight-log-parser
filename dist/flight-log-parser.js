(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stream')) :
  typeof define === 'function' && define.amd ? define(['exports', 'stream'], factory) :
  (factory((global.flightLogParser = {}),global.stream));
}(this, (function (exports,stream) { 'use strict';

  stream = stream && stream.hasOwnProperty('default') ? stream['default'] : stream;

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

  class ResizeableBuffer{
    constructor(size=100){
      this.size = size;
      this.length = 0;
      this.buf = Buffer.alloc(size);
    }
    prepend(val){
      const length = this.length++;
      if(length === this.size){
        this.resize();
      }
      const buf = this.clone();
      this.buf[0] = val;
      buf.copy(this.buf,1, 0, length);
    }
    append(val){
      const length = this.length++;
      if(length === this.size){
        this.resize();
      }
      this.buf[length] = val;
    }
    clone(){
      return Buffer.from(this.buf.slice(0, this.length))
    }
    resize(){
      const length = this.length;
      this.size = this.size * 2;
      const buf = Buffer.alloc(this.size);
      this.buf.copy(buf,0, 0, length);
      this.buf = buf;
    }
    toString(){
      return this.buf.slice(0, this.length).toString()
    }
    reset(){
      this.length = 0;
    }
  }

  var ResizeableBuffer_1 = ResizeableBuffer;

  /*
  CSV Parse

  Please look at the [project documentation](https://csv.js.org/parse/) for additional
  information.
  */

  const { Transform } = stream;


  const cr = 13;
  const nl = 10;
  const space = 32;
  const tab = 9;
  const bom_utf8 = Buffer.from([239, 187, 191]);

  class Parser extends Transform {
    constructor(opts = {}){
      super({...{readableObjectMode: true}, ...opts});
      const options = {};
      // Merge with user options
      for(let opt in opts){
        options[underscore(opt)] = opts[opt];
      }
      // Normalize option `bom`
      if(options.bom === undefined || options.bom === null || options.bom === false){
        options.bom = false;
      }else if(options.bom !== true){
        throw new Error(`Invalid Option: bom must be true, got ${JSON.stringify(options.bom)}`)
      }
      // Normalize option `cast`
      let fnCastField = null;
      if(options.cast === undefined || options.cast === null || options.cast === false || options.cast === ''){
        options.cast = undefined;
      }else if(typeof options.cast === 'function'){
        fnCastField = options.cast;
        options.cast = true;
      }else if(options.cast !== true){
        throw new Error('Invalid Option: cast must be true or a function')
      }
      // Normalize option `cast_date`
      if(options.cast_date === undefined || options.cast_date === null || options.cast_date === false || options.cast_date === ''){
        options.cast_date = false;
      }else if(options.cast_date === true){
        options.cast_date = function(value){
          const date = Date.parse(value);
          return !isNaN(date) ? new Date(date) : value
        };
      }else if(typeof options.cast_date !== 'function'){
        throw new Error('Invalid Option: cast_date must be true or a function')
      }
      // Normalize option `columns`
      let fnFirstLineToHeaders = null;
      if(options.columns === true){
        // Fields in the first line are converted as-is to columns
        fnFirstLineToHeaders = undefined;
      }else if(typeof options.columns === 'function'){
        fnFirstLineToHeaders = options.columns;
        options.columns = true;
      }else if(Array.isArray(options.columns)){
        options.columns = normalizeColumnsArray(options.columns);
      }else if(options.columns === undefined || options.columns === null || options.columns === false){
        options.columns = false;
      }else{
        throw new Error(`Invalid Option columns: expect an object or true, got ${JSON.stringify(options.columns)}`)
      }
      // Normalize option `comment`
      if(options.comment === undefined || options.comment === null || options.comment === false || options.comment === ''){
        options.comment = null;
      }else{
        if(typeof options.comment === 'string'){
          options.comment = Buffer.from(options.comment);
        }
        if(!Buffer.isBuffer(options.comment)){
          throw new Error(`Invalid Option: comment must be a buffer or a string, got ${JSON.stringify(options.comment)}`)
        }
      }
      // Normalize option `delimiter`
      if(options.delimiter === undefined || options.delimiter === null || options.delimiter === false){
        options.delimiter = Buffer.from(',');
      }else if(Buffer.isBuffer(options.delimiter)){
        if(options.delimiter.length === 0){
          throw new Error(`Invalid Option: delimiter must be a non empty buffer`)
        }
        // Great, nothing to do
      }else if(typeof options.delimiter === 'string'){
        if(options.delimiter.length === 0){
          throw new Error(`Invalid Option: delimiter must be a non empty string`)
        }
        options.delimiter = Buffer.from(options.delimiter);
      }else{
        throw new Error(`Invalid Option: delimiter must be a string or a buffer, got ${options.delimiter}`)
      }
      // Normalize option `escape`
      if(options.escape === undefined || options.escape === null){
        options.escape = Buffer.from('"');
      }else if(typeof options.escape === 'string'){
        options.escape = Buffer.from(options.escape);
      }
      if(!Buffer.isBuffer(options.escape)){
        throw new Error(`Invalid Option: escape must be a buffer or a string, got ${JSON.stringify(options.escape)}`)
      }else if(options.escape.length !== 1){
        throw new Error(`Invalid Option Length: escape must be one character, got ${options.escape.length}`)
      }else{
        options.escape = options.escape[0];
      }
      // Normalize option `from`
      if(options.from === undefined || options.from === null){
        options.from = 1;
      }else{
        if(typeof options.from === 'string' && /\d+/.test(options.from)){
          options.from = parseInt(options.from);
        }
        if(Number.isInteger(options.from)){
          if(options.from < 0){
            throw new Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(opts.from)}`)
          }
        }else{
          throw new Error(`Invalid Option: from must be an integer, got ${JSON.stringify(options.from)}`)
        }
      }
      // Normalize option `from_line`
      if(options.from_line === undefined || options.from_line === null){
        options.from_line = 1;
      }else{
        if(typeof options.from_line === 'string' && /\d+/.test(options.from_line)){
          options.from_line = parseInt(options.from_line);
        }
        if(Number.isInteger(options.from_line)){
          if(options.from_line <= 0){
            throw new Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(opts.from_line)}`)
          }
        }else{
          throw new Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(opts.from_line)}`)
        }
      }
      // Normalize option `info`
      if(options.info === undefined || options.info === null || options.info === false){
        options.info = false;
      }else if(options.info !== true){
        throw new Error(`Invalid Option: info must be true, got ${JSON.stringify(options.info)}`)
      }
      // Normalize option `max_record_size`
      if(options.max_record_size === undefined || options.max_record_size === null || options.max_record_size === false){
        options.max_record_size = 0;
      }else if(Number.isInteger(options.max_record_size) && options.max_record_size >= 0);else if(typeof options.max_record_size === 'string' && /\d+/.test(options.max_record_size)){
        options.max_record_size = parseInt(options.max_record_size);
      }else{
        throw new Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(options.max_record_size)}`)
      }
      // Normalize option `objname`
      if(options.objname === undefined || options.objname === null || options.objname === false){
        options.objname = undefined;
      }else if(Buffer.isBuffer(options.objname)){
        if(options.objname.length === 0){
          throw new Error(`Invalid Option: objname must be a non empty buffer`)
        }
        options.objname = options.objname.toString();
      }else if(typeof options.objname === 'string'){
        if(options.objname.length === 0){
          throw new Error(`Invalid Option: objname must be a non empty string`)
        }
        // Great, nothing to do
      }else{
        throw new Error(`Invalid Option: objname must be a string or a buffer, got ${options.objname}`)
      }
      // Normalize option `quote`
      if(options.quote === null || options.quote === false || options.quote === ''){
        options.quote = null;
      }else{
        if(options.quote === undefined || options.quote === true){
          options.quote = Buffer.from('"');
        }else if(typeof options.quote === 'string'){
          options.quote = Buffer.from(options.quote);
        }
        if(!Buffer.isBuffer(options.quote)){
          throw new Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(options.quote)}`)
        }else if(options.quote.length !== 1){
          throw new Error(`Invalid Option Length: quote must be one character, got ${options.quote.length}`)
        }else{
          options.quote = options.quote[0];
        }
      }
      // Normalize option `raw`
      if(options.raw === undefined || options.raw === null || options.raw === false){
        options.raw = false;
      }else if(options.raw !== true){
        throw new Error(`Invalid Option: raw must be true, got ${JSON.stringify(options.raw)}`)
      }
      // Normalize option `record_delimiter`
      if(!options.record_delimiter){
        options.record_delimiter = [];
      }else if(!Array.isArray(options.record_delimiter)){
        options.record_delimiter = [options.record_delimiter];
      }
      options.record_delimiter = options.record_delimiter.map( function(rd){
        if(typeof rd === 'string'){
          rd = Buffer.from(rd);
        }
        return rd
      });
      // Normalize option `relax`
      if(typeof options.relax === 'boolean');else if(options.relax === undefined || options.relax === null){
        options.relax = false;
      }else{
        throw new Error(`Invalid Option: relax must be a boolean, got ${JSON.stringify(options.relax)}`)
      }
      // Normalize option `relax_column_count`
      if(typeof options.relax_column_count === 'boolean');else if(options.relax_column_count === undefined || options.relax_column_count === null){
        options.relax_column_count = false;
      }else{
        throw new Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(options.relax_column_count)}`)
      }
      // Normalize option `skip_empty_lines`
      if(typeof options.skip_empty_lines === 'boolean');else if(options.skip_empty_lines === undefined || options.skip_empty_lines === null){
        options.skip_empty_lines = false;
      }else{
        throw new Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(options.skip_empty_lines)}`)
      }
      // Normalize option `skip_lines_with_empty_values`
      if(typeof options.skip_lines_with_empty_values === 'boolean');else if(options.skip_lines_with_empty_values === undefined || options.skip_lines_with_empty_values === null){
        options.skip_lines_with_empty_values = false;
      }else{
        throw new Error(`Invalid Option: skip_lines_with_empty_values must be a boolean, got ${JSON.stringify(options.skip_lines_with_empty_values)}`)
      }
      // Normalize option `skip_lines_with_error`
      if(typeof options.skip_lines_with_error === 'boolean');else if(options.skip_lines_with_error === undefined || options.skip_lines_with_error === null){
        options.skip_lines_with_error = false;
      }else{
        throw new Error(`Invalid Option: skip_lines_with_error must be a boolean, got ${JSON.stringify(options.skip_lines_with_error)}`)
      }
      // Normalize option `rtrim`
      if(options.rtrim === undefined || options.rtrim === null || options.rtrim === false){
        options.rtrim = false;
      }else if(options.rtrim !== true){
        throw new Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(options.rtrim)}`)
      }
      // Normalize option `ltrim`
      if(options.ltrim === undefined || options.ltrim === null || options.ltrim === false){
        options.ltrim = false;
      }else if(options.ltrim !== true){
        throw new Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(options.ltrim)}`)
      }
      // Normalize option `trim`
      if(options.trim === undefined || options.trim === null || options.trim === false){
        options.trim = false;
      }else if(options.trim !== true){
        throw new Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(options.trim)}`)
      }
      // Normalize options `trim`, `ltrim` and `rtrim`
      if(options.trim === true && opts.ltrim !== false){
        options.ltrim = true;
      }else if(options.ltrim !== true){
        options.ltrim = false;
      }
      if(options.trim === true && opts.rtrim !== false){
        options.rtrim = true;
      }else if(options.rtrim !== true){
        options.rtrim = false;
      }
      // Normalize option `to`
      if(options.to === undefined || options.to === null){
        options.to = -1;
      }else{
        if(typeof options.to === 'string' && /\d+/.test(options.to)){
          options.to = parseInt(options.to);
        }
        if(Number.isInteger(options.to)){
          if(options.to <= 0){
            throw new Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(opts.to)}`)
          }
        }else{
          throw new Error(`Invalid Option: to must be an integer, got ${JSON.stringify(opts.to)}`)
        }
      }
      // Normalize option `to_line`
      if(options.to_line === undefined || options.to_line === null){
        options.to_line = -1;
      }else{
        if(typeof options.to_line === 'string' && /\d+/.test(options.to_line)){
          options.to_line = parseInt(options.to_line);
        }
        if(Number.isInteger(options.to_line)){
          if(options.to_line <= 0){
            throw new Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(opts.to_line)}`)
          }
        }else{
          throw new Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(opts.to_line)}`)
        }
      }
      this.info = {
        comment_lines: 0,
        empty_lines: 0,
        invalid_field_length: 0,
        lines: 1,
        records: 0
      };
      this.options = options;
      this.state = {
        bomSkipped: false,
        castField: fnCastField,
        commenting: false,
        enabled: options.from_line === 1,
        escaping: false,
        escapeIsQuote: options.escape === options.quote,
        expectedRecordLength: options.columns === null ? 0 : options.columns.length,
        field: new ResizeableBuffer_1(20),
        firstLineToHeaders: fnFirstLineToHeaders,
        info: Object.assign({}, this.info),
        previousBuf: undefined,
        quoting: false,
        stop: false,
        rawBuffer: new ResizeableBuffer_1(100),
        record: [],
        recordHasError: false,
        record_length: 0,
        recordDelimiterMaxLength: options.record_delimiter.length === 0 ? 2 : Math.max(...options.record_delimiter.map( (v) => v.length)),
        trimChars: [Buffer.from(' ')[0], Buffer.from('\t')[0]],
        wasQuoting: false,
        wasRowDelimiter: false
      };
    }
    // Implementation of `Transform._transform`
    _transform(buf, encoding, callback){
      if(this.state.stop === true){
        return
      }
      const err = this.__parse(buf, false);
      if(err !== undefined){
        this.state.stop = true;
      }
      callback(err);
    }
    // Implementation of `Transform._flush`
    _flush(callback){
      if(this.state.stop === true){
        return
      }
      const err = this.__parse(undefined, true);
      callback(err);
    }
    // Central parser implementation
    __parse(nextBuf, end){
      const {bom, comment, escape, from, from_line, info, ltrim, max_record_size, quote, raw, relax, rtrim, skip_empty_lines, to, to_line} = this.options;
      let {record_delimiter} = this.options;
      const {bomSkipped, previousBuf, rawBuffer, escapeIsQuote, trimChars} = this.state;
      let buf;
      if(previousBuf === undefined){
        if(nextBuf === undefined){
          // Handle empty string
          this.push(null);
          return
        }else{
          buf = nextBuf;
        }
      }else if(previousBuf !== undefined && nextBuf === undefined){
        buf = previousBuf;
      }else{
        buf = Buffer.concat([previousBuf, nextBuf]);
      }
      // Handle UTF BOM
      if(bomSkipped === false){
        if(bom === false){
          this.state.bomSkipped = true;
        }else if(buf.length < 3){
          // No enough data
          if(end === false){
            // Wait for more data
            this.state.previousBuf = buf;
            return
          }
          // skip BOM detect because data length < 3
        }else{
          if(bom_utf8.compare(buf, 0, 3) === 0){
            // Skip BOM
            buf = buf.slice(3);
          }
          this.state.bomSkipped = true;
        }
      }
      const bufLen = buf.length;
      let pos;
      for(pos = 0; pos < bufLen; pos++){
        // Ensure we get enough space to look ahead
        // There should be a way to move this out of the loop
        if(this.__needMoreData(pos, bufLen, end)){
          break
        }
        if(this.state.wasRowDelimiter === true){
          this.info.lines++;
          if(info === true && this.state.record.length === 0 && this.state.field.length === 0 && this.state.wasQuoting === false){
            this.state.info = Object.assign({}, this.info);
          }
          this.state.wasRowDelimiter = false;
        }
        if(to_line !== -1 && this.info.lines > to_line){
          this.state.stop = true;
          this.push(null);
          return
        }
        // Auto discovery of record_delimiter, unix, mac and windows supported
        if(this.state.quoting === false && record_delimiter.length === 0){
          const record_delimiterCount = this.__autoDiscoverRowDelimiter(buf, pos);
          if(record_delimiterCount){
            record_delimiter = this.options.record_delimiter;
          }
        }
        const chr = buf[pos];
        if(raw === true){
          rawBuffer.append(chr);
        }
        if((chr === cr || chr === nl) && this.state.wasRowDelimiter === false ){
          this.state.wasRowDelimiter = true;
        }
        // Previous char was a valid escape char
        // treat the current char as a regular char
        if(this.state.escaping === true){
          this.state.escaping = false;
        }else{
          // Escape is only active inside quoted fields
          if(this.state.quoting === true && chr === escape && pos + 1 < bufLen){
            // We are quoting, the char is an escape chr and there is a chr to escape
            if(escapeIsQuote){
              if(buf[pos+1] === quote){
                this.state.escaping = true;
                continue
              }
            }else{
              this.state.escaping = true;
              continue
            }
          }
          // Not currently escaping and chr is a quote
          // TODO: need to compare bytes instead of single char
          if(this.state.commenting === false && chr === quote){
            if(this.state.quoting === true){
              const nextChr = buf[pos+1];
              const isNextChrTrimable = rtrim && this.__isCharTrimable(nextChr);
              // const isNextChrComment = nextChr === comment
              const isNextChrComment = comment !== null && this.__compareBytes(comment, buf, pos+1, nextChr);
              const isNextChrDelimiter = this.__isDelimiter(nextChr, buf, pos+1);
              const isNextChrRowDelimiter = record_delimiter.length === 0 ? this.__autoDiscoverRowDelimiter(buf, pos+1) : this.__isRecordDelimiter(nextChr, buf, pos+1);
              // Escape a quote
              // Treat next char as a regular character
              // TODO: need to compare bytes instead of single char
              if(chr === escape && nextChr === quote){
                pos++;
              }else if(!nextChr || isNextChrDelimiter || isNextChrRowDelimiter || isNextChrComment || isNextChrTrimable){
                this.state.quoting = false;
                this.state.wasQuoting = true;
                continue
              }else if(relax === false){
                const err = this.__error(`Invalid Closing Quote: got "${String.fromCharCode(nextChr)}" at line ${this.info.lines} instead of delimiter, row delimiter, trimable character (if activated) or comment`);
                if(err !== undefined) return err
              }else{
                this.state.quoting = false;
                this.state.wasQuoting = true;
                // continue
                this.state.field.prepend(quote);
              }
            }else{
              if(this.state.field.length !== 0){
                // In relax mode, treat opening quote preceded by chrs as regular
                if( relax === false ){
                  const err = this.__error(`Invalid opening quote at line ${this.info.lines}`);
                  if(err !== undefined) return err
                }
              }else{
                this.state.quoting = true;
                continue
              }
            }
          }
          if(this.state.quoting === false){
            let recordDelimiterLength = this.__isRecordDelimiter(chr, buf, pos);
            if(recordDelimiterLength !== 0){
              // Do not emit comments which take a full line
              const skipCommentLine = this.state.commenting && (this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0);
              if(skipCommentLine){
                this.info.comment_lines++;
                // Skip full comment line
              }else{
                // Skip if line is empty and skip_empty_lines activated
                if(skip_empty_lines === true && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0){
                  this.info.empty_lines++;
                  pos += recordDelimiterLength - 1;
                  continue
                }
                // Activate records emition if above from_line
                if(this.state.enabled === false && this.info.lines + (this.state.wasRowDelimiter === true ? 1: 0 ) >= from_line){
                  this.state.enabled = true;
                  this.__resetField();
                  this.__resetRow();
                  pos += recordDelimiterLength - 1;
                  continue
                }else{
                  const errField = this.__onField();
                  if(errField !== undefined) return errField
                  const errRecord = this.__onRow();
                  if(errRecord !== undefined) return errRecord
                }
                if(to !== -1 && this.info.records >= to){
                  this.state.stop = true;
                  this.push(null);
                  return
                }
              }
              this.state.commenting = false;
              pos += recordDelimiterLength - 1;
              continue
            }
            if(this.state.commenting){
              continue
            }
            const commentCount = comment === null ? 0 : this.__compareBytes(comment, buf, pos, chr);
            if(commentCount !== 0){
              this.state.commenting = true;
              continue
            }
            let delimiterLength = this.__isDelimiter(chr, buf, pos);
            if(delimiterLength !== 0){
              const errField = this.__onField();
              if(errField !== undefined) return errField
              pos += delimiterLength - 1;
              continue
            }
          }
        }
        if(this.state.commenting === false){
          if(max_record_size !== 0 && this.state.record_length + this.state.field.length > max_record_size){
            const err = this.__error(`Max Record Size: record exceed the maximum number of tolerated bytes of ${max_record_size} on line ${this.info.lines}`);
            if(err !== undefined) return err
          }
        }

        const lappend = ltrim === false || this.state.quoting === true || this.state.field.length !== 0 || !this.__isCharTrimable(chr);
        // rtrim in non quoting is handle in __onField
        const rappend = rtrim === false || this.state.wasQuoting === false;
        if( lappend === true && rappend === true ){
          this.state.field.append(chr);
        }else if(rtrim === true && !this.__isCharTrimable(chr)){
          const err = this.__error(`Invalid Closing Quote: found non trimable byte after quote at line ${this.info.lines}`);
          if(err !== undefined) return err
        }
      }
      if(end === true){
        if(this.state.quoting === true){
          const err = this.__error(`Invalid Closing Quote: quote is not closed at line ${this.info.lines}`);
          if(err !== undefined) return err
        }else{
          // Skip last line if it has no characters
          if(this.state.wasQuoting === true || this.state.record.length !== 0 || this.state.field.length !== 0){
            const errField = this.__onField();
            if(errField !== undefined) return errField
            const errRecord = this.__onRow();
            if(errRecord !== undefined) return errRecord
          }else if(this.state.wasRowDelimiter === true){
            this.info.empty_lines++;
          }else if(this.state.commenting === true){
            this.info.comment_lines++;
          }
        }
      }else{
        this.state.previousBuf = buf.slice(pos);
      }
      if(this.state.wasRowDelimiter === true){
        this.info.lines++;
        this.state.wasRowDelimiter = false;
      }
    }
    // Helper to test if a character is a space or a line delimiter
    __isCharTrimable(chr){
      return chr === space || chr === tab || chr === cr || chr === nl
    }
    __onRow(){
      const {columns, info, from, relax_column_count, raw, skip_lines_with_empty_values} = this.options;
      const {enabled, record} = this.state;
      // Convert the first line into column names
      if(columns === true){
        return this.__firstLineToColumns(record)
      }
      const recordLength = record.length;
      if(columns === false && this.info.records === 0){
        this.state.expectedRecordLength = recordLength;
      }else if(enabled === true){
        if(recordLength !== this.state.expectedRecordLength){
          if(relax_column_count === true){
            this.info.invalid_field_length++;
          }else{
            if(columns === false){
              const err = this.__error(`Invalid Record Length: expect ${this.state.expectedRecordLength}, got ${recordLength} on line ${this.info.lines}`);
              if(err !== undefined) return err
            }else{
              const err = this.__error(`Invalid Record Length: header length is ${columns.length}, got ${recordLength} on line ${this.info.lines}`);
              if(err !== undefined) return err
            }
          }
        }
      }
      if(enabled === false){
        return this.__resetRow()
      }
      if(skip_lines_with_empty_values === true){
        if(record.map( (field) => field.trim() ).join('') === ''){
          this.__resetRow();
          return
        }
      }
      if(this.state.recordHasError === true){
        this.__resetRow();
        this.state.recordHasError = false;
        return
      }
      this.info.records++;
      if(from === 1 || this.info.records >= from){
        if(columns !== false){
          const obj = {};
          // Transform record array to an object
          for(let i in record){
            if(columns[i] === undefined || columns[i].disabled) continue
            obj[columns[i].name] = record[i];
          }
          const {objname} = this.options;
          if(objname === undefined){
            if(raw === true || info === true){
              this.push(Object.assign(
                {record: obj},
                (raw === true ? {raw: this.state.rawBuffer.toString()}: {}),
                (info === true ? {info: this.state.info}: {})
              ));
            }else{
              this.push(obj);
            }
          }else{
            if(raw === true || info === true){
              this.push(Object.assign(
                {record: [obj[objname], obj]},
                raw === true ? {raw: this.state.rawBuffer.toString()}: {},
                info === true ? {info: this.state.info}: {}
              ));
            }else{
              this.push([obj[objname], obj]);
            }
          }
        }else{
          if(raw === true || info === true){
            this.push(Object.assign(
              {record: record},
              raw === true ? {raw: this.state.rawBuffer.toString()}: {},
              info === true ? {info: this.state.info}: {}
            ));
          }else{
            this.push(record);
          }
        }
      }
      this.__resetRow();
    }
    __firstLineToColumns(record){
      const {firstLineToHeaders} = this.state;
      try{
        // record = record.filter(function(field){ return field !== undefined})
        const headers = firstLineToHeaders === undefined ? record : firstLineToHeaders.call(null, record);
        if(!Array.isArray(headers)){
          return this.__error(`Invalid Header Mapping: expect an array, got ${JSON.stringify(headers)}`)
        }
        const normalizedHeaders = normalizeColumnsArray(headers);
        this.state.expectedRecordLength = normalizedHeaders.length;
        this.options.columns = normalizedHeaders;
        this.__resetRow();
        return
      }catch(err){
        return err
      }
    }
    __resetRow(){
      const {info} = this.options;
      if(this.options.raw === true){
        this.state.rawBuffer.reset();
      }
      this.state.record = [];
      this.state.record_length = 0;
    }
    __onField(){
      const {cast, rtrim, max_record_size} = this.options;
      const {enabled, wasQuoting} = this.state;
      // Deal with from_to options
      if(this.options.columns !== true && enabled === false){
        return this.__resetField()
      }
      let field = this.state.field.toString();
      if(rtrim === true && wasQuoting === false){
        field = field.trimRight();
      }
      if(cast === true){
        const [err, f] = this.__cast(field);
        if(err !== undefined) return err
        field = f;
      }
      this.state.record.push(field);
      // Increment record length if record size must not exceed a limit
      if(max_record_size !== 0 && typeof field === 'string'){
        this.state.record_length += field.length;
      }
      this.__resetField();
    }
    __resetField(){
      this.state.field.reset();
      this.state.wasQuoting = false;
    }
    // Return a tuple with the error and the casted value
    __cast(field){
      const isColumns = Array.isArray(this.options.columns);
      // Dont loose time calling cast if the field wont be part of the final record
      if( isColumns === true && this.options.columns.length <= this.state.record.length ){
        return [undefined, undefined]
      }
      const context = {
        column: isColumns === true ?
          this.options.columns[this.state.record.length].name :
          this.state.record.length,
        empty_lines: this.info.empty_lines,
        header: this.options.columns === true,
        index: this.state.record.length,
        invalid_field_length: this.info.invalid_field_length,
        quoting: this.state.wasQuoting,
        lines: this.info.lines,
        records: this.info.records
      };
      if(this.state.castField !== null){
        try{
          return [undefined, this.state.castField.call(null, field, context)]
        }catch(err){
          return [err]
        }
      }
      if(this.__isFloat(field)){
        return [undefined, parseFloat(field)]
      }else if(this.options.cast_date !== false){
        return [undefined, this.options.cast_date.call(null, field, context)]
      }
      return [undefined, field]
    }
    // Keep it in case we implement the `cast_int` option
    // __isInt(value){
    //   // return Number.isInteger(parseInt(value))
    //   // return !isNaN( parseInt( obj ) );
    //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
    // }
    __isFloat(value){
      return (value - parseFloat( value ) + 1) >= 0 // Borrowed from jquery
    }
    __compareBytes(sourceBuf, targetBuf, pos, firtByte){
      if(sourceBuf[0] !== firtByte) return 0
      const sourceLength = sourceBuf.length;
      for(let i = 1; i < sourceLength; i++){
        if(sourceBuf[i] !== targetBuf[pos+i]) return 0
      }
      return sourceLength
    }
    __needMoreData(i, bufLen, end){
      if(end){
        return false
      }
      const {comment, delimiter, escape} = this.options;
      const {quoting, recordDelimiterMaxLength} = this.state;
      const numOfCharLeft = bufLen - i - 1;
      const requiredLength = Math.max(
        // Skip if the remaining buffer smaller than comment
        comment ? comment.length : 0,
        // Skip if the remaining buffer smaller than row delimiter
        recordDelimiterMaxLength,
        // Skip if the remaining buffer can be row delimiter following the closing quote
        // 1 is for quote.length
        quoting ? (1 + recordDelimiterMaxLength) : 0,
        // Skip if the remaining buffer can be delimiter
        delimiter.length,
        // Skip if the remaining buffer can be escape sequence
        // 1 is for escape.length
        1
      );
      return numOfCharLeft < requiredLength
    }
    __isDelimiter(chr, buf, pos){
      const {delimiter} = this.options;
      const delLength = delimiter.length;
      if(delimiter[0] !== chr) return 0
      for(let i = 1; i < delLength; i++){
        if(delimiter[i] !== buf[pos+i]) return 0
      }
      return delimiter.length
    }
    __isRecordDelimiter(chr, buf, pos){
      const {record_delimiter} = this.options;
      const recordDelimiterLength = record_delimiter.length;
      loop1: for(let i = 0; i < recordDelimiterLength; i++){
        const rd = record_delimiter[i];
        const rdLength = rd.length;
        if(rd[0] !== chr){
          continue
        }
        for(let j = 1; j < rdLength; j++){
          if(rd[j] !== buf[pos+j]){
            continue loop1
          }
        }
        return rd.length
      }
      return 0
    }
    __autoDiscoverRowDelimiter(buf, pos){
      const chr = buf[pos];
      if(chr === cr){
        if(buf[pos+1] === nl){
          this.options.record_delimiter.push(Buffer.from('\r\n'));
          this.state.recordDelimiterMaxLength = 2;
          return 2
        }else{
          this.options.record_delimiter.push(Buffer.from('\r'));
          this.state.recordDelimiterMaxLength = 1;
          return 1
        }
      }else if(chr === nl){
        this.options.record_delimiter.push(Buffer.from('\n'));
        this.state.recordDelimiterMaxLength = 1;
        return 1
      }
      return 0
    }
    __error(msg){
      const {skip_lines_with_error} = this.options;
      const err = new Error(msg);
      if(skip_lines_with_error){
        this.state.recordHasError = true;
        this.emit('skip', err);
        return undefined
      }else{
        return err
      }
    }
  }

  const parse = function(){
    let data, options, callback;
    for(let i in arguments){
      const argument = arguments[i];
      const type = typeof argument;
      if(data === undefined && (typeof argument === 'string' || Buffer.isBuffer(argument))){
        data = argument;
      }else if(options === undefined && isObject(argument)){
        options = argument;
      }else if(callback === undefined && type === 'function'){
        callback = argument;
      }else{
        throw new Error(`Invalid argument: got ${JSON.stringify(argument)} at index ${i}`)
      }
    }
    const parser = new Parser(options);
    if(callback){
      const records = options === undefined || options.objname === undefined ? [] : {};
      parser.on('readable', function(){
        let record;
        while(record = this.read()){
          if(options === undefined || options.objname === undefined){
            records.push(record);
          }else{
            records[record[0]] = record[1];
          }
        }
      });
      parser.on('error', function(err){
        callback(err, undefined, parser.info);
      });
      parser.on('end', function(){
        callback(undefined, records, parser.info);
      });
    }
    if(data !== undefined){
      parser.write(data);
      parser.end();
    }
    return parser
  };

  parse.Parser = Parser;

  var lib = parse;

  const underscore = function(str){
    return str.replace(/([A-Z])/g, function(_, match, index){
      return '_' + match.toLowerCase()
    })
  };

  const isObject = function(obj){
    return (typeof obj === 'object' && obj !== null && !Array.isArray(obj))
  };

  const normalizeColumnsArray = function(columns){
    // console.log('columns', columns)
    const normalizedColumns = [];

    for(let i=0; i< columns.length; i++){
      const column = columns[i];
      if(column === undefined || column === null || column === false){
        normalizedColumns[i] = { disabled: true };
      }else if(typeof column === 'string'){
        normalizedColumns[i] = { name: column };
      }else if(isObject(column)){
        if(typeof column.name !== 'string'){
          throw new Error(`Invalid Option columns: property "name" is required at position ${i} when column is an object literal`)
        }
        normalizedColumns[i] = column;
      }else{
        throw new Error(`Invalid Option columns: expect a string or an object, got ${JSON.stringify(column)} at position ${i}`)
      }
    }
    // console.log(normalizedColumns)
    return normalizedColumns;
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
              parseBody([rowHeaderLine, line], true).then((rows) => {
                  row = rows[0];
                  meta.session.end = row[exports.FlightLogHeader.DateTime];
                  meta.session.elapsed = row[exports.FlightLogHeader.ElapsedTime];
                  result.next({
                      meta,
                      rowIndex: progress.index++,
                      row,
                      info: parseJsonInfo(row.Info),
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
                      if (DATE_FIELDS.has(header)) {
                          value = fromUtcDateStr(value);
                      }
                      log[header] = value;
                  }
                  return log;
              });
              resolve(logs);
          };
          if (sync) {
              const results = syncParse(text, options);
              onResults(undefined, results);
          }
          else {
              // @ts-ignore
              lib(text, options, onResults);
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

  exports.FLIGHT_MODE_MAPPING = FLIGHT_MODE_MAPPING;
  exports.parseLog = parseLog;
  exports.parseLogStream = parseLogStream;
  exports.QuasiSubject = QuasiSubject;
  exports.fromUtcDateStr = fromUtcDateStr;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flight-log-parser.js.map
