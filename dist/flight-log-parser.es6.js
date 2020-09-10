import buffer from 'buffer';
import stream from 'stream';
import util from 'util';

var FlightLogHeader;
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
    FlightLogHeader["DeviceToAircraftDistance"] = "Device > Aircraft Distance - XY (ft)";
})(FlightLogHeader || (FlightLogHeader = {}));
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var safeBuffer = createCommonjsModule(function (module, exports) {
/* eslint-disable node/no-deprecated-api */

var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
};
});
var safeBuffer_1 = safeBuffer.Buffer;

/*<replacement>*/

var Buffer$1 = safeBuffer.Buffer;
/*</replacement>*/

var isEncoding = Buffer$1.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer$1.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var StringDecoder_1 = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer$1.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

var string_decoder = {
	StringDecoder: StringDecoder_1
};

// Generated by CoffeeScript 2.2.4
// # CSV Parser

// This module provides a CSV parser tested and used against large datasets. Over
// the year, it has been enhance and is now full of useful options.

// Please look at the [README], the [project website][site] the [samples] and the
// [tests] for additional information.
var Parser, StringDecoder$1, isObjLiteral, stream$1, util$1;

stream$1 = stream;

util$1 = util;

StringDecoder$1 = string_decoder.StringDecoder;

// ## Usage

// Callback approach, for ease of use:   

// `parse(data, [options], callback)`     

// [Node.js Stream API][stream], for maximum of power:   

// `parse([options], [callback])`   
var lib = function() {
  var callback, called, chunks, data, err, options, parser;
  if (arguments.length === 3) {
    data = arguments[0];
    options = arguments[1];
    callback = arguments[2];
    if (typeof callback !== 'function') {
      throw Error(`Invalid callback argument: ${JSON.stringify(callback)}`);
    }
    if (!(typeof data === 'string' || Buffer.isBuffer(arguments[0]))) {
      return callback(Error(`Invalid data argument: ${JSON.stringify(data)}`));
    }
  } else if (arguments.length === 2) {
    // 1st arg is data:string or options:object
    if (typeof arguments[0] === 'string' || Buffer.isBuffer(arguments[0])) {
      data = arguments[0];
    } else if (isObjLiteral(arguments[0])) {
      options = arguments[0];
    } else {
      err = `Invalid first argument: ${JSON.stringify(arguments[0])}`;
    }
    // 2nd arg is options:object or callback:function
    if (typeof arguments[1] === 'function') {
      callback = arguments[1];
    } else if (isObjLiteral(arguments[1])) {
      if (options) {
        err = 'Invalid arguments: got options twice as first and second arguments';
      } else {
        options = arguments[1];
      }
    } else {
      err = `Invalid first argument: ${JSON.stringify(arguments[1])}`;
    }
    if (err) {
      if (!callback) {
        throw Error(err);
      } else {
        return callback(Error(err));
      }
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === 'function') {
      callback = arguments[0];
    } else {
      options = arguments[0];
    }
  }
  if (options == null) {
    options = {};
  }
  parser = new Parser(options);
  if (data != null) {
    process.nextTick(function() {
      parser.write(data);
      return parser.end();
    });
  }
  if (callback) {
    called = false;
    chunks = options.objname ? {} : [];
    parser.on('readable', function() {
      var chunk, results;
      results = [];
      while (chunk = parser.read()) {
        if (options.objname) {
          results.push(chunks[chunk[0]] = chunk[1]);
        } else {
          results.push(chunks.push(chunk));
        }
      }
      return results;
    });
    parser.on('error', function(err) {
      called = true;
      return callback(err);
    });
    parser.on('end', function() {
      if (!called) {
        return callback(null, chunks);
      }
    });
  }
  return parser;
};

// ## `Parser([options])`

// Options are documented [here](http://csv.adaltas.com/parse/).
Parser = function(options = {}) {
  var base, base1, base10, base11, base12, base13, base14, base15, base16, base17, base2, base3, base4, base5, base6, base7, base8, base9, k, v;
  // @options = options
  this.options = {};
  for (k in options) {
    v = options[k];
    this.options[k] = v;
  }
  this.options.objectMode = true;
  stream$1.Transform.call(this, this.options);
  if ((base = this.options).rowDelimiter == null) {
    base.rowDelimiter = null;
  }
  if (typeof this.options.rowDelimiter === 'string') {
    this.options.rowDelimiter = [this.options.rowDelimiter];
  }
  if ((base1 = this.options).delimiter == null) {
    base1.delimiter = ',';
  }
  if (this.options.quote !== void 0 && !this.options.quote) {
    this.options.quote = '';
  }
  if ((base2 = this.options).quote == null) {
    base2.quote = '"';
  }
  if ((base3 = this.options).escape == null) {
    base3.escape = '"';
  }
  if ((base4 = this.options).columns == null) {
    base4.columns = null;
  }
  if ((base5 = this.options).comment == null) {
    base5.comment = '';
  }
  if ((base6 = this.options).objname == null) {
    base6.objname = false;
  }
  if ((base7 = this.options).trim == null) {
    base7.trim = false;
  }
  if ((base8 = this.options).ltrim == null) {
    base8.ltrim = false;
  }
  if ((base9 = this.options).rtrim == null) {
    base9.rtrim = false;
  }
  if (this.options.auto_parse != null) {
    this.options.cast = this.options.auto_parse;
  }
  if ((base10 = this.options).cast == null) {
    base10.cast = false;
  }
  if (this.options.auto_parse_date != null) {
    this.options.cast_date = this.options.auto_parse_date;
  }
  if ((base11 = this.options).cast_date == null) {
    base11.cast_date = false;
  }
  if (this.options.cast_date === true) {
    this.options.cast_date = function(value) {
      var m;
      m = Date.parse(value);
      if (!isNaN(m)) {
        value = new Date(m);
      }
      return value;
    };
  }
  if ((base12 = this.options).relax == null) {
    base12.relax = false;
  }
  if ((base13 = this.options).relax_column_count == null) {
    base13.relax_column_count = false;
  }
  if ((base14 = this.options).skip_empty_lines == null) {
    base14.skip_empty_lines = false;
  }
  if ((base15 = this.options).max_limit_on_data_read == null) {
    base15.max_limit_on_data_read = 128000;
  }
  if ((base16 = this.options).skip_lines_with_empty_values == null) {
    base16.skip_lines_with_empty_values = false;
  }
  if ((base17 = this.options).skip_lines_with_error == null) {
    base17.skip_lines_with_error = false;
  }
  // Counters
  // lines = count + skipped_line_count + empty_line_count
  this.lines = 0; // Number of lines encountered in the source dataset
  this.count = 0; // Number of records being processed
  this.skipped_line_count = 0; // Number of records skipped due to errors
  this.empty_line_count = 0; // Number of empty lines
  // Constants
  this.is_int = /^(\-|\+)?([1-9]+[0-9]*)$/;
  // @is_float = /^(\-|\+)?([0-9]+(\.[0-9]+)([eE][0-9]+)?|Infinity)$/
  // @is_float = /^(\-|\+)?((([0-9])|([1-9]+[0-9]*))(\.[0-9]+)([eE][0-9]+)?|Infinity)$/
  this.is_float = function(value) {
    return (value - parseFloat(value) + 1) >= 0; // Borrowed from jquery
  };
  // Internal state
  this._ = {
    decoder: new StringDecoder$1(),
    quoting: false,
    commenting: false,
    field: null,
    nextChar: null,
    closingQuote: 0,
    line: [],
    chunks: [],
    rawBuf: '',
    buf: '',
    rowDelimiterLength: this.options.rowDelimiter ? Math.max(...this.options.rowDelimiter.map(function(v) {
      return v.length;
    })) : void 0,
    lineHasError: false
  };
  return this;
};

// ## Internal API

// The Parser implement a [`stream.Transform` class][transform].

// ### Events

// The library extends Node [EventEmitter][event] class and emit all
// the events of the Writable and Readable [Stream API][stream]. 
util$1.inherits(Parser, stream$1.Transform);

// For extra flexibility, you can get access to the original Parser
// class: `require('csv-parse').Parser`.
var Parser_1 = Parser;

// ### `_transform(chunk, encoding, callback)`

// *   `chunk` Buffer | String   
//     The chunk to be transformed. Will always be a buffer unless the decodeStrings option was set to false.
// *   `encoding` String   
//     If the chunk is a string, then this is the encoding type. (Ignore if decodeStrings chunk is a buffer.)
// *   `callback` Function   
//     Call this function (optionally with an error argument) when you are done processing the supplied chunk.

// Implementation of the [`stream.Transform` API][transform]
Parser.prototype._transform = function(chunk, encoding, callback) {
  return setImmediate(() => {
    var err;
    if (chunk instanceof Buffer) {
      chunk = this._.decoder.write(chunk);
    }
    err = this.__write(chunk, false);
    if (err) {
      return this.emit('error', err);
    }
    return callback();
  });
};

Parser.prototype._flush = function(callback) {
  return callback(this.__flush());
};

Parser.prototype.__flush = function() {
  var err;
  err = this.__write(this._.decoder.end(), true);
  if (err) {
    return err;
  }
  if (this._.quoting) {
    err = this.error(`Quoted field not terminated at line ${this.lines + 1}`);
    return err;
  }
  if (this._.line.length > 0) {
    return this.__push(this._.line);
  }
};

Parser.prototype.__push = function(line) {
  var call_column_udf, columns, err, field, i, j, len, lineAsColumns, record;
  if (this.options.skip_lines_with_empty_values && line.join('').trim() === '') {
    return;
  }
  record = null;
  if (this.options.columns === true) {
    this.options.columns = line;
    return;
  } else if (typeof this.options.columns === 'function') {
    call_column_udf = function(fn, line) {
      var columns, err;
      try {
        columns = fn.call(null, line);
        return [null, columns];
      } catch (error) {
        err = error;
        return [err];
      }
    };
    [err, columns] = call_column_udf(this.options.columns, line);
    if (err) {
      return err;
    }
    this.options.columns = columns;
    return;
  }
  if (!this._.line_length && line.length > 0) {
    this._.line_length = this.options.columns ? this.options.columns.length : line.length;
  }
  // Dont check column count on empty lines
  if (line.length === 1 && line[0] === '') {
    this.empty_line_count++;
  } else if (line.length !== this._.line_length) {
    // Dont check column count with relax_column_count
    if (this.options.relax_column_count) {
      this.count++;
      this.skipped_line_count++;
    } else if (this.options.columns != null) {
      // Suggest: Inconsistent header and column numbers: header is 1 and number of columns is 1 on line 1
      err = this.error(`Number of columns on line ${this.lines} does not match header`);
      return err;
    } else {
      err = this.error(`Number of columns is inconsistent on line ${this.lines}`);
      return err;
    }
  } else {
    this.count++;
  }
  if (this.options.columns != null) {
    lineAsColumns = {};
    for (i = j = 0, len = line.length; j < len; i = ++j) {
      field = line[i];
      if (this.options.columns[i] === false) {
        continue;
      }
      lineAsColumns[this.options.columns[i]] = field;
    }
    if (this.options.objname) {
      record = [lineAsColumns[this.options.objname], lineAsColumns];
    } else {
      record = lineAsColumns;
    }
  } else {
    record = line;
  }
  if (this.count < this.options.from) {
    return;
  }
  if (this.count > this.options.to) {
    return;
  }
  if (this.options.raw) {
    this.push({
      raw: this._.rawBuf,
      row: record
    });
    this._.rawBuf = '';
  } else {
    this.push(record);
  }
  if (this.listenerCount('record')) {
    this.emit('record', record);
  }
  return null;
};

Parser.prototype.__write = function(chars, end) {
  var areNextCharsDelimiter, areNextCharsRowDelimiters, cast, char, err, escapeIsQuote, i, isDelimiter, isEscape, isNextCharAComment, isNextCharTrimable, isQuote, isRowDelimiter, isRowDelimiterLength, is_float, is_int, l, ltrim, nextCharPos, ref, ref1, ref2, ref3, ref4, ref5, ref6, remainingBuffer, rowDelimiter, rtrim, wasCommenting;
  is_int = (value) => {
    if (typeof this.is_int === 'function') {
      return this.is_int(value);
    } else {
      return this.is_int.test(value);
    }
  };
  is_float = (value) => {
    if (typeof this.is_float === 'function') {
      return this.is_float(value);
    } else {
      return this.is_float.test(value);
    }
  };
  cast = (value, context = {}) => {
    if (!this.options.cast) {
      return value;
    }
    if (context.quoting == null) {
      context.quoting = !!this._.closingQuote;
    }
    if (context.lines == null) {
      context.lines = this.lines;
    }
    if (context.count == null) {
      context.count = this.count;
    }
    if (context.index == null) {
      context.index = this._.line.length;
    }
    // context.header ?= if @options.column and @lines is 1 and @count is 0 then true else false
    if (context.header == null) {
      context.header = this.options.columns === true;
    }
    if (context.column == null) {
      context.column = Array.isArray(this.options.columns) ? this.options.columns[context.index] : context.index;
    }
    if (typeof this.options.cast === 'function') {
      return this.options.cast(value, context);
    }
    if (is_int(value)) {
      value = parseInt(value);
    } else if (is_float(value)) {
      value = parseFloat(value);
    } else if (this.options.cast_date) {
      value = this.options.cast_date(value, context);
    }
    return value;
  };
  ltrim = this.options.trim || this.options.ltrim;
  rtrim = this.options.trim || this.options.rtrim;
  chars = this._.buf + chars;
  l = chars.length;
  i = 0;
  if (this.lines === 0 && 0xFEFF === chars.charCodeAt(0)) {
    // Strip BOM header
    i++;
  }
  while (i < l) {
    // Ensure we get enough space to look ahead
    if (!end) {
      remainingBuffer = chars.substr(i, l - i);
      // (i+1000 >= l) or
      // Skip if the remaining buffer can be comment
      // Skip if the remaining buffer can be row delimiter
      if ((!this.options.rowDelimiter && i + 3 > l) || (!this._.commenting && l - i < this.options.comment.length && this.options.comment.substr(0, l - i) === remainingBuffer) || (this.options.rowDelimiter && l - i < this._.rowDelimiterLength && this.options.rowDelimiter.some(function(rd) {
        return rd.substr(0, l - i) === remainingBuffer;
      // Skip if the remaining buffer can be row delimiter following the closing quote
      })) || (this.options.rowDelimiter && this._.quoting && l - i < (this.options.quote.length + this._.rowDelimiterLength) && this.options.rowDelimiter.some((rd) => {
        return (this.options.quote + rd).substr(0, l - i) === remainingBuffer;
      // Skip if the remaining buffer can be delimiter
      // Skip if the remaining buffer can be escape sequence
      })) || (l - i <= this.options.delimiter.length && this.options.delimiter.substr(0, l - i) === remainingBuffer) || (l - i <= this.options.escape.length && this.options.escape.substr(0, l - i) === remainingBuffer)) {
        break;
      }
    }
    char = this._.nextChar ? this._.nextChar : chars.charAt(i);
    this._.nextChar = l > i + 1 ? chars.charAt(i + 1) : null;
    if (this.options.raw) {
      this._.rawBuf += char;
    }
    // Auto discovery of rowDelimiter, unix, mac and windows supported
    if (this.options.rowDelimiter == null) {
      nextCharPos = i;
      rowDelimiter = null;
      // First empty line
      if (!this._.quoting && (char === '\n' || char === '\r')) {
        rowDelimiter = char;
        nextCharPos += 1;
      } else if (this._.quoting && char === this.options.quote && ((ref = this._.nextChar) === '\n' || ref === '\r')) {
        rowDelimiter = this._.nextChar;
        nextCharPos += 2;
      }
      if (rowDelimiter) {
        if (rowDelimiter === '\r' && chars.charAt(nextCharPos) === '\n') {
          rowDelimiter += '\n';
        }
        this.options.rowDelimiter = [rowDelimiter];
        this._.rowDelimiterLength = rowDelimiter.length;
      }
    }
    // Parse that damn char
    // Note, shouldn't we have sth like chars.substr(i, @options.escape.length)
    if (!this._.commenting && char === this.options.escape) {
      // Make sure the escape is really here for escaping:
      // If escape is same as quote, and escape is first char of a field 
      // and it's not quoted, then it is a quote
      // Next char should be an escape or a quote
      escapeIsQuote = this.options.escape === this.options.quote;
      isEscape = this._.nextChar === this.options.escape;
      isQuote = this._.nextChar === this.options.quote;
      if (!(escapeIsQuote && !this._.field && !this._.quoting) && (isEscape || isQuote)) {
        i++;
        char = this._.nextChar;
        this._.nextChar = chars.charAt(i + 1);
        if (this._.field == null) {
          this._.field = '';
        }
        this._.field += char;
        // Since we're skipping the next one, better add it now if in raw mode.
        if (this.options.raw) {
          this._.rawBuf += char;
        }
        i++;
        continue;
      }
    }
    // Char match quote
    if (!this._.commenting && char === this.options.quote) {
      if (this._.acceptOnlyEmptyChars && (char !== ' ' && char !== '\t')) {
        return this.error('Only trimable characters are accepted after quotes');
      }
      if (this._.quoting) {
        // Make sure a closing quote is followed by a delimiter
        // If we have a next character and 
        // it isnt a rowDelimiter and 
        // it isnt an column delimiter and
        // it isnt the begining of a comment
        // Otherwise, if this is not "relax" mode, throw an error
        isNextCharTrimable = rtrim && ((ref1 = this._.nextChar) === ' ' || ref1 === '\t');
        areNextCharsRowDelimiters = this.options.rowDelimiter && this.options.rowDelimiter.some(function(rd) {
          return chars.substr(i + 1, rd.length) === rd;
        });
        areNextCharsDelimiter = chars.substr(i + 1, this.options.delimiter.length) === this.options.delimiter;
        isNextCharAComment = this._.nextChar === this.options.comment;
        if ((this._.nextChar != null) && !isNextCharTrimable && !areNextCharsRowDelimiters && !areNextCharsDelimiter && !isNextCharAComment) {
          if (this.options.relax) {
            this._.quoting = false;
            if (this._.field) {
              this._.field = `${this.options.quote}${this._.field}`;
            }
          } else {
            if (err = this.error(`Invalid closing quote at line ${this.lines + 1}; found ${JSON.stringify(this._.nextChar)} instead of delimiter ${JSON.stringify(this.options.delimiter)}`)) {
              return err;
            }
          }
        } else if ((this._.nextChar != null) && isNextCharTrimable) {
          i++;
          this._.quoting = false;
          this._.closingQuote = this.options.quote.length;
          this._.acceptOnlyEmptyChars = true;
          continue;
        } else {
          i++;
          this._.quoting = false;
          this._.closingQuote = this.options.quote.length;
          if (end && i === l) {
            this._.line.push(cast(this._.field || ''));
            this._.field = null;
          }
          continue;
        }
      } else if (!this._.field) {
        this._.quoting = true;
        i++;
        continue;
      } else if ((this._.field != null) && !this.options.relax) {
        if (err = this.error(`Invalid opening quote at line ${this.lines + 1}`)) {
          return err;
        }
      }
    }
    // Otherwise, treat quote as a regular character
    isRowDelimiter = this.options.rowDelimiter && this.options.rowDelimiter.some(function(rd) {
      return chars.substr(i, rd.length) === rd;
    });
    if (isRowDelimiter || (end && i === l - 1)) {
      this.lines++;
    }
    // Set the commenting flag
    wasCommenting = false;
    if (!this._.commenting && !this._.quoting && this.options.comment && chars.substr(i, this.options.comment.length) === this.options.comment) {
      this._.commenting = true;
    } else if (this._.commenting && isRowDelimiter) {
      wasCommenting = true;
      this._.commenting = false;
    }
    isDelimiter = chars.substr(i, this.options.delimiter.length) === this.options.delimiter;
    if (this._.acceptOnlyEmptyChars) {
      if (isDelimiter || isRowDelimiter) {
        this._.acceptOnlyEmptyChars = false;
      } else {
        if (char === ' ' || char === '\t') {
          i++;
          continue;
        } else {
          return this.error('Only trimable characters are accepted after quotes');
        }
      }
    }
    if (!this._.commenting && !this._.quoting && (isDelimiter || isRowDelimiter)) {
      if (isRowDelimiter) {
        isRowDelimiterLength = this.options.rowDelimiter.filter(function(rd) {
          return chars.substr(i, rd.length) === rd;
        })[0].length;
      }
      // Empty lines
      if (isRowDelimiter && this._.line.length === 0 && (this._.field == null)) {
        if (wasCommenting || this.options.skip_empty_lines) {
          i += isRowDelimiterLength;
          this._.nextChar = chars.charAt(i);
          continue;
        }
      }
      if (rtrim) {
        if (!this._.closingQuote) {
          this._.field = (ref2 = this._.field) != null ? ref2.trimRight() : void 0;
        }
      }
      this._.line.push(cast(this._.field || ''));
      this._.closingQuote = 0;
      this._.field = null;
      if (isDelimiter) { // End of field
        i += this.options.delimiter.length;
        this._.nextChar = chars.charAt(i);
        if (end && !this._.nextChar) {
          isRowDelimiter = true;
          this._.line.push('');
        }
      }
      if (isRowDelimiter) { // End of record
        if (!this._.lineHasError) {
          err = this.__push(this._.line);
          if (err) {
            return err;
          }
        }
        if (this._.lineHasError) {
          this._.lineHasError = false;
        }
        // Some cleanup for the next record
        this._.line = [];
        i += isRowDelimiterLength;
        this._.nextChar = chars.charAt(i);
        continue;
      }
    } else if (!this._.commenting && !this._.quoting && (char === ' ' || char === '\t')) {
      if (this._.field == null) {
        // Left trim unless we are quoting or field already filled
        this._.field = '';
      }
      if (!(ltrim && !this._.field)) {
        this._.field += char;
      }
      i++;
    } else if (!this._.commenting) {
      if (this._.field == null) {
        this._.field = '';
      }
      this._.field += char;
      i++;
    } else {
      i++;
    }
    if (!this._.commenting && ((ref3 = this._.field) != null ? ref3.length : void 0) > this.options.max_limit_on_data_read) {
      return Error(`Field exceeds max_limit_on_data_read setting (${this.options.max_limit_on_data_read}) ${JSON.stringify(this.options.delimiter)}`);
    }
    if (!this._.commenting && ((ref4 = this._.line) != null ? ref4.length : void 0) > this.options.max_limit_on_data_read) {
      return Error(`Row delimiter not found in the file ${JSON.stringify(this.options.rowDelimiter)}`);
    }
  }
  // Flush remaining fields and lines
  if (end) {
    if (l === 0) {
      this.lines++;
    }
    if (this._.field != null) {
      if (rtrim) {
        if (!this._.closingQuote) {
          this._.field = (ref5 = this._.field) != null ? ref5.trimRight() : void 0;
        }
      }
      this._.line.push(cast(this._.field || ''));
      this._.field = null;
    }
    if (((ref6 = this._.field) != null ? ref6.length : void 0) > this.options.max_limit_on_data_read) {
      return Error(`Delimiter not found in the file ${JSON.stringify(this.options.delimiter)}`);
    }
    if (this._.line.length > this.options.max_limit_on_data_read) {
      return Error(`Row delimiter not found in the file ${JSON.stringify(this.options.rowDelimiter)}`);
    }
  }
  // Store un-parsed chars for next call
  this._.buf = chars.substr(i);
  return null;
};

Parser.prototype.error = function(msg) {
  var err;
  err = Error(msg);
  if (!this.options.skip_lines_with_error) {
    return err;
  } else {
    if (!this._.lineHasError) {
      this._.lineHasError = true;
      this.emit('skip', err);
    }
  }
  return null;
};

// ## Utils
isObjLiteral = function(_obj) {
  var _test;
  _test = _obj;
  if (typeof _obj !== 'object' || _obj === null || Array.isArray(_obj)) {
    return false;
  } else {
    return (function() {
      while (!false) {
        if (Object.getPrototypeOf(_test = Object.getPrototypeOf(_test)) === null) {
          break;
        }
      }
      return Object.getPrototypeOf(_obj === _test);
    })();
  }
};
lib.Parser = Parser_1;

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
    FlightLogHeader.AircraftSmartGoHomeRadius,
    FlightLogHeader.AircraftSmartGoHomeCountdown,
    FlightLogHeader.AircraftVelocityX,
    FlightLogHeader.AircraftVelocityY,
    FlightLogHeader.AircraftVelocityZ,
    FlightLogHeader.RCHorizontalAccuaracy,
    FlightLogHeader.RCLatitude,
    FlightLogHeader.RCLongitude,
    FlightLogHeader.LandingGearStatusValue,
    FlightLogHeader.LandingGearModeValue,
    FlightLogHeader.RCStateValue,
    FlightLogHeader.RCLandingGearValue,
]);
const FLOAT_FIELDS = new Set([
    FlightLogHeader.AircraftBarometricAltitude,
    FlightLogHeader.AircraftBatteryPowerPercent,
    FlightLogHeader.AircraftCameraSDCardRemainingPercent,
    FlightLogHeader.AircraftHeading,
    FlightLogHeader.AircraftLatitude,
    FlightLogHeader.AircraftLongitude,
    FlightLogHeader.AircraftNoFlyLatitude,
    FlightLogHeader.AircraftNoFlyLongitude,
    FlightLogHeader.AircraftNoFlyRadius,
    FlightLogHeader.AircraftPitch,
    FlightLogHeader.AircraftRoll,
    FlightLogHeader.AircraftSmartGoHomeFlightReturnTime,
    FlightLogHeader.AircraftSmartGoHomeFlightTimeRemaining,
    FlightLogHeader.AircraftSmartGoHomeLandingPower,
    FlightLogHeader.AircraftSmartGoHomeLandingTime,
    FlightLogHeader.AircraftSmartGoHomeReturnPower,
    FlightLogHeader.AircraftSpeed,
    FlightLogHeader.AircraftUltrasonicAltitude,
    FlightLogHeader.DeviceToAircraftDistance,
    FlightLogHeader.ElapsedTime,
    FlightLogHeader.GimbalPitch,
    FlightLogHeader.GimbalPitchAtStop,
    FlightLogHeader.GimbalRoll,
    FlightLogHeader.GimbalRollAtStop,
    FlightLogHeader.GimbalYaw,
    FlightLogHeader.GimbalYawAtStop,
    FlightLogHeader.HomeLatitude,
    FlightLogHeader.HomeLongitude,
    FlightLogHeader.RCBatteryPercentRemaining,
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
    FlightLogHeader.LandingGearIsMovable,
    FlightLogHeader.RCGoHome,
    FlightLogHeader.RCRecord,
    FlightLogHeader.RCShutter,
    FlightLogHeader.RCPlayback,
    FlightLogHeader.RCPause,
    FlightLogHeader.RCCustom1,
    FlightLogHeader.RCCustom2,
    FlightLogHeader.RCSattelites,
    FlightLogHeader.RCGSPDataIsValid,
    FlightLogHeader.RCLeftHorizontal,
    FlightLogHeader.RCRightHorizontal,
    FlightLogHeader.RCLeftVertical,
    FlightLogHeader.RCRightVertical,
    FlightLogHeader.AircraftCameraChangeableLensSupported,
    FlightLogHeader.AircraftCameraLensInstalled,
    FlightLogHeader.AircraftCameraLensMFAssistant,
]);
const DATE_FIELDS = new Set([
    FlightLogHeader.DateTime,
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
};
const LOG_HEADER_LINES = 27;
const LOG_FOOTER_LINES = 3;
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
    let meta;
    let rowHeaderLine;
    const result = new QuasiSubject();
    let progress = { index: 0, completed: false };
    let end;
    logStream.subscribe((line) => {
        if (!line.trim().length) {
            return;
        }
        if (headerMetaLines.length < LOG_HEADER_LINES) {
            headerMetaLines.push(line);
            progress.index++;
            return;
        }
        if (!meta) {
            rowHeaderLine = line;
            meta = parseMetaData(headerMetaLines, []);
            // This is the beginning of the parsing.
            result.next({
                meta,
                rowIndex: progress.index,
            });
            return;
        }
        let row;
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
                meta.session.end = row[FlightLogHeader.DateTime];
                meta.session.elapsed = row[FlightLogHeader.ElapsedTime];
                result.next({
                    meta,
                    rowIndex: progress.index++,
                    row,
                });
            });
        }
    }, (err) => { console.error('parsing error: ' + err); result.complete(); }, () => {
        if (!progress.completed) {
            result.complete();
        }
    });
    return result;
}
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
function parseBody(lines, sync) {
    const text = lines.join('\n');
    const options = {
        delimiter: '\t',
        from: 1,
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

export { FlightLogHeader, FLIGHT_MODE_MAPPING, parseLog, parseLogStream, QuasiSubject, fromUtcDateStr };
//# sourceMappingURL=flight-log-parser.es6.js.map
