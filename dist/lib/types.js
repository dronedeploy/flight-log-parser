"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})(FlightLogHeader = exports.FlightLogHeader || (exports.FlightLogHeader = {}));
// based off of types in ios/android SDK FlightMode enums
exports.FLIGHT_MODE_MAPPING = {
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
//# sourceMappingURL=types.js.map