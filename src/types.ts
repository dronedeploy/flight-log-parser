export enum FlightLogHeader {
  DateTime = 'Date/Time (UTC)',
  ElapsedTime = 'Elapsed Time (sec)',
  Info = 'Info',
  DeviceLatitude = 'Device Latitude (Degrees)',
  DeviceLongitude = 'Device Longitude (Degrees)',
  DeviceLocationLastUpdated = 'Device Location Last Updated (ms)',
  AircraftBatteryPowerPercent = 'Aircraft Battery Power (%)',
  AircraftBatteryCharge = 'Aircraft Battery Charge (mAh)',
  AircraftBatteryCurrent = 'Aircraft Battery Current (mA)',
  AircraftBatteryVoltage = 'Aircraft Battery Voltage (mV)',
  AircraftBatteryTemperature = 'Aircraft Battery Temperature (Fahrenheit)',
  AircraftBatteryLastUpdated = 'Aircraft Battery Last Updated (ms)',
  AircraftBatteryCell1Voltage = 'Aircraft Battery Cell 1 Voltage',
  AircraftBatteryCell2Voltage = 'Aircraft Battery Cell 2 Voltage',
  AircraftBatteryCell3Voltage = 'Aircraft Battery Cell 3 Voltage',
  AircraftBatteryCell4Voltage = 'Aircraft Battery Cell 4 Voltage',
  AircraftBatteryCellVoltageLastUpdated = 'Aircraft Battery Cell Voltage Last Updated (ms)',
  AircraftLatitude = 'Aircraft Latitude (Degrees)',
  AircraftLongitude = 'Aircraft Longitude (Degrees)',
  AircraftSpeed = 'Aircraft Speed (mph)',
  AircraftBarometricAltitude = 'Aircraft Barometric Altitude (ft)',
  AircraftHeading = 'Aircraft Heading (Degrees)',
  AircraftVelocityX = 'Aircraft Vel - X (mph)',
  AircraftVelocityY = 'Aircraft Vel - Y (mph)',
  AircraftVelocityZ = 'Aircraft Vel - Z (mph)',
  AircraftPitch = 'Aircraft Pitch (Degrees)',
  AircraftRoll = 'Aircraft Roll (Degrees)',
  AircraftSatellites = 'Aircraft Satellites',
  AircraftMotorsOn = 'Aircraft Motors On',
  AircraftFlying = 'Aircraft Flying',
  AircraftFlightMode = 'Aircraft Flight Mode',
  AircraftFlightModeValue = 'Aircraft Flight Mode Value',
  AircraftIMUPreheating = 'Aircraft IMU Preheating',
  AircraftUltrasonicOn = 'Aircraft Ultrasonic On',
  AircraftUltrasonicAltitude = 'Aircraft Ultrasonic Altitude (ft)',
  AircraftVisionOn = 'Aircraft Vision On',
  AircraftGPSSignal = 'Aircraft GPS Signal',
  AircraftGPSSignalValue = 'Aircraft GPS Signal Value',
  AircraftNoFly = 'Aircraft No-fly',
  AircraftNoFlyValue = 'Aircraft No-fly Value',
  AircraftNoFlyLatitude = 'Aircraft No-fly Latitude (Degrees)',
  AircraftNoFlyLongitude = 'Aircraft No-fly Longitude (Degrees)',
  AircraftNoFlyRadius = 'Aircraft No-fly Radius (ft)',
  HomeLatitude = 'Home Latitude (Degrees)',
  HomeLongitude = 'Home Longitude (Degrees)',
  AircraftSmartGoHomeFlightTimeRemaining = 'Aircraft Smart Go-home Flight Time Remaining (sec)',
  AircraftSmartGoHomeFlightReturnTime = 'Aircraft Smart Go-home Flight Return Time (sec)',
  AircraftSmartGoHomeLandingTime = 'Aircraft Smart Go-home Landing Time (sec)',
  AircraftSmartGoHomeReturnPower = 'Aircraft Smart Go-home Return Power (%)',
  AircraftSmartGoHomeLandingPower = 'Aircraft Smart Go-home Landing Power (%)',
  AircraftSmartGoHomeRadius = 'Aircraft Smart Go-home Radius (ft)',
  AircraftSmartGoHomeCountdown = 'Aircraft Smart Go-home Countdown (sec)',
  AircraftSmartGoHomeRequesting = 'Aircraft Smart Go-home Requesting',
  AircraftSystemStateLastUpdated = 'Aircraft System State Last Updated (ms)',
  GimbalPitch = 'Gimbal Pitch (Degrees)',
  GimbalRoll = 'Gimbal Roll (Degrees)',
  GimbalYaw = 'Gimbal Yaw (Degrees)',
  GimbalMode = 'Gimbal Mode',
  GimbalModeValue = 'Gimbal Mode Value',
  GimbalPitchAtStop = 'Gimbal Pitch at Stop',
  GimbalRollAtStop = 'Gimbal Roll at Stop',
  GimbalYawAtStop = 'Gimbal Yaw at Stop',
  GimbalStatusLastUpdated = 'Gimbal Status Last Updated (ms)',
  LandingGearIsMovable = 'Landing Gear is Movable',
  LandingGearStatus = 'Landing Gear Status',
  LandingGearStatusValue = 'Landing Gear Status Value',
  LandingGearMode = 'Landing Gear Mode',
  LandingGearModeValue = 'Landing Gear Mode Value',
  LandingGearLastUpdated = 'Landing Gear Last Updated (ms)',
  RCState = 'RC State',
  RCStateValue = 'RC State Value',
  RCLeftHorizontal = 'RC Left Horizontal',
  RCLeftVertical = 'RC Left Vertical',
  RCRightHorizontal = 'RC Right Horizontal',
  RCRightVertical = 'RC Right Vertical',
  RCLeftWheel = 'RC Left Wheel',
  RCRightWheel = 'RC Right Wheel',
  RCLandingGear = 'RC Landing Gear',
  RCLandingGearValue = 'RC Landing Gear Value',
  RCGoHome = 'RC Go Home',
  RCRecord = 'RC Record ',
  RCShutter = 'RC Shutter',
  RCPlayback = 'RC Playback',
  RCPause = 'RC Pause',
  RCCustom1 = 'RC Custom 1',
  RCCustom2 = 'RC Custom 2',
  RCStateLastUpdated = 'RC State Last Updated (ms)',
  RCBatteryPercentRemaining = 'RC Battery (%)',
  RCBatteryStateLastUpdated = 'RC Battery State Last Updated (ms)',
  RCSattelites = 'RC Sattelites',
  RCHorizontalAccuaracy = 'RC Horizontal Accuaracy (ft)',
  RCLatitude = 'RC Latitude (Degrees)',
  RCLongitude = 'RC Longitude (Degrees)',
  RCGSPDataIsValid = 'RC GSP Data is Valid',
  RCGPSStateLastUpdated = 'RC GPS State Last Updated (ms)',
  RCSignal1 = 'RC Signal 1',
  RCSignal2 = 'RC Signal 2',
  RCSignalLastUpdated = 'RC Signal Last Updated (ms)',
  LBSignal1 = 'LB Signal 1',
  LBSignal2 = 'LB Signal 2',
  LBSignalLastUpdated = 'LB Signal Last Updated (ms)',
  AircraftCameraMode = 'Aircraft Camera Mode',
  AircraftCameraModeValue = 'Aircraft Camera Mode Value',
  AircraftCameraOverheated = 'Aircraft Camera Overheated',
  AircraftCameraSensorError = 'Aircraft Camera Sensor Error',
  AircraftCameraRecording = 'Aircraft Camera Recording',
  AircraftCameraRawCapture = 'Aircraft Camera Raw Capture',
  AircraftCameraIntervalCapture = 'Aircraft Camera Interval Capture',
  AircraftCameraBurstCapture = 'Aircraft Camera Burst Capture',
  AircraftCameraSingleCapture = 'Aircraft Camera Single Capture',
  AircraftCameraStoringPhoto = 'Aircraft Camera Storing Photo',
  AircraftCameraStateLastUpdated = 'Aircraft Camera State Last Updated (ms)',
  AircraftCameraSDCardExists = 'Aircraft Camera SD Card Exists',
  AircraftCameraSDCardRemainingPercent = 'Aircraft Camera SD Card Remaining (%)',
  AircraftCameraSDCardStateLastUpdated = 'Aircraft Camera SD Card State Last Updated (ms)',
  AircraftCameraChangeableLensSupported = 'Aircraft Camera Changeable Lens Supported',
  AircraftCameraLensInstalled = 'Aircraft Camera Lens Installed',
  AircraftCameraLensType = 'Aircraft Camera Lens Type',
  AircraftCameraLensAFEnabled = 'Aircraft Camera Lens AF Enabled',
  AircraftCameraLensFocusMode = 'Aircraft Camera Lens Focus Mode',
  AircraftCameraLensFocusModeValue = 'Aircraft Camera Lens Focus Mode Value',
  AircraftCameraLensFocusStatus = 'Aircraft Camera Lens Focus Status',
  AircraftCameraLensFocusStatusValue = 'Aircraft Camera Lens Focus Status Value',
  AircraftCameraLensMFAssistant = 'Aircraft Camera Lens MF Assistant',
  AircraftCameraLensAFAssistant = 'Aircraft Camera Lens AF Assistant',
  AircraftCameraLensAssistantWorking = 'Aircraft Camera Lens Assistant Working',
  AircraftCameraLensStateLastUpdated = 'Aircraft Camera Lens State Last Updated (ms)',
  CompassIndex = "Compass Index",
  CompassSensorValue = "Compass Sensor Value",
  CompassState = "Compass State",
  CompassStateLastUpdated = "Compass State Last Updated (ms)",
  CompassCalibrationState = "Compass Calibration State",
  CompassCalibrationLastUpdated = "Compass Calibration Last Updated (ms)",
  DeviceToAircraftDistance = 'Device > Aircraft Distance - XY (ft)',
}

export type FlightLogRow = {
  [prop in FlightLogHeader]: any // because csv
};

export type FlightLogMetaData = {
  appVersion: string;
  session: {
    id: string;
    start: Date;
    end: Date | null;
    elapsed: number;
  };
  device: {
    model: string;
    os: string;
    platform: string;
  };
  aircraft: {
    model: string;
    name: string;
    firmware: string;
  };
  battery: {
    chargeVolume: number;
    remainingLifePercent: number;
    discharges: number;
    cells: number;
    firmware: string;
    serialNumber: string;
  };
  flightController: {
    serialNumber: string;
    firmware: string;
  };
  gimbal: {
    firmware: string;
  };
  remoteController: {
    serialNumber: string;
    firmware: string;
  };
  camera: {
    serialNumber: string;
  };
  user: {
    userId: string;
    organizationId: string;
  };
};

export type FlightLog = {
  metaData: FlightLogMetaData;
  rows: FlightLogRow[];
  infos: any[];
};

export type FlightLogEvent = {
  meta: FlightLogMetaData;
  rowIndex?: number;
  row?: FlightLogRow;
  info?: undefined|Array<object>;  // Empty string => undefined, else parsed JSON blob.
};

// based off of types in ios/android SDK FlightMode enums
export const FLIGHT_MODE_MAPPING = {
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
