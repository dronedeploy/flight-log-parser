# Flight log parser
Flight log parser is a JavaScript library for parsing [dronedelpoy flight logs](https://support.dronedeploy.com/v2.0/docs/gathering-flight-logs).

## Installation
### In Node.js
```bash
npm install @dronedeploy/flight-log-parser
```

## How to use
To run example file
```bash
node dist/__example__/index.js
```

#### parseLog
The `parseLog` method of `Flight log parser` takes in a `String` that is generated from a DJI flight log and it returns a `FlightLog` object.

##### In .js file
```js
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const { parseLog } = require ('flight-log-parser');

const readFileAsync = promisify(fs.readFile);
const filePath = path.join(__dirname, 'YOUR_LOG_FILE_PATH');

readFileAsync(filePath, {encoding: 'utf8'})
  .then((text) => {
      // parseLog() returns a FlightLog object
      const parsedFlightLog = parseLog(text);  
  })
  .catch((err) => {
      console.log('ERROR:', err);
  });
```

##### FlightLog
`FlightLog` object separates a flight log to two parts: `metaData` and `rows`.
```js
 // Type definitions
 FlightLog = {
  metaData: FlightLogMetaData;
  rows: FlightLogRow[];
}
```

##### FlightLogMetaData
`FlightLogMetaData` groups related information from the log file to subcategories: appVersion, device, aircraft, battery ...
```js
FlightLogMetaData = {
  appVersion: string;
  session: {
    id: string;
    start: Date;
    end: Date,
    elapsed: number;
  };
  device: {
    model: string;
    os: string;
  };
  aircraft: {
    model: string;
    name: string;
    firmware: string;
  };
  battery: {
    cells: number;
    chargeVolume: number;
    discharges: number;
    remainingLifePercent: number;
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
};
```
##### FlightLogRow
DJI flight log creates a row of current flight info at every 0.1s. `FlightLogRow` is an array that contains all the rows DJI flight log created.

If you want to retrieve information at 10s after the drone took off, you can do so by asking for the row at index 100.
```js
readFileAsync(filePath, {encoding: 'utf8'})
  .then((text) => {
      const parsedFlightLog = parseLog(text);
      const log10sAfterTookOff = parsedFlightLog.rows[100];
  })
```
##### FlightLogHeader
`FlightLogHeader` is an enum object that contains all the column names of a row.
For example :
```js
enum FlightLogHeader {
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
    ...
}
```

##### Example output
```js
//Sample result:
 {
    metaData : {
        appVersion: '2.75.0',
        session:
         { id: '12345678',
           start: 2018-06-05T05:29:00.000Z,
           end: 2018-06-05T05:31:40.000Z,
           elapsed: 160.408 },
        device: { model: 'iPhone', os: 'iOS 11.4' },
        aircraft:
         { model: 'Inspire 1 Pro',
           name: 'inspire pro',
           firmware: '1.11.01.50' },
        battery:
         { chargeVolume: 4287,
           remainingLifePercent: 83,
           discharges: 69,
           cells: 6,
           firmware: '03.09.00.00',
           serialNumber: '12345678' },
        flightController: { serialNumber: 'N/A', firmware: '02.04.20.50' },
        gimbal: { firmware: '01.31.01.67' },
        remoteController: { serialNumber: '12345678', firmware: '1.2.0.17' },
        camera: { serialNumber: 'N/A' }
    },
    rows:  [
        { 'Date/Time (GMT)': '06/04/2018 20:32:36',
        'Elapsed Time (sec)': 6.675,
        Info: 'Mission did take off',
        'Aircraft Battery Power (%)': 95,
        'Aircraft Battery Charge (mAh)': 3944,
        'Aircraft Battery Current (mA)': -13688,
        'Aircraft Battery Voltage (mV)': 23736,
        'Aircraft Battery Temperature (Fahrenheit)': 26,
        'Aircraft Battery Last Updated (ms)': '999',
        'Aircraft Battery Cell 1 Voltage (mV)': '',
        'Aircraft Battery Cell 2 Voltage (mV)': '',
        'Aircraft Battery Cell 3 Voltage (mV)': '',
        'Aircraft Battery Cell 4 Voltage (mV)': '',
        'Aircraft Battery Cell 5 Voltage (mV)': '',
        'Aircraft Battery Cell 6 Voltage (mV)': '',
        'Aircraft Latitude (Degrees)': 37.771803179308414,
        'Aircraft Longitude (Degrees)': -122.40742532970359,
        'Aircraft Barometric Altitude (ft)': 6.599999904632568,
        'Aircraft Heading (Degrees)': 48.6,
        'Aircraft Pitch (Degrees)': -1.3,
        'Aircraft Roll (Degrees)': -16.4,
        'Aircraft Satellites': 14,
        'Aircraft Motors On': true,
        'Aircraft Flying': true,
        'Aircraft Flight Mode': 'NAVI',
        'Aircraft Flight Mode Value': 14,
        'Aircraft IMU Preheating': false,
        'Aircraft Ultrasonic On': true,
        'Aircraft Ultrasonic Altitude (ft)': 6.5,
        'Aircraft Vision On': false,
        'Aircraft GPS Signal': 'Very strong',
        'Aircraft GPS Signal Value': 5,
        'Aircraft No-Fly': 'null',
        'Aircraft No-Fly Value': '0',
        'Aircraft No-fly Latitude (Degrees)': 0,
        'Aircraft No-fly Longitude (Degrees)': 0,
        'Aircraft No-fly Radius (ft)': 0,
        'Home Latitude (Degrees)': 37.77181085673832,
        'Home Longitude (Degrees)': -122.4074317468288,
        'Aircraft Smart Go-home Flight Time Remaining (sec)': 0,
        'Aircraft Smart Go-home Flight Return Time (sec)': 0,
        'Aircraft Smart Go-home Landing Time (sec)': 0,
        'Aircraft Smart Go-home Return Power (%)': 0,
        'Aircraft Smart Go-home Landing Power (%)': NaN,
        'Aircraft Smart Go-home Radius (ft)': 0,
        'Aircraft Smart Go-home Countdown (sec)': 0,
        'Aircraft Smart Go-home State': 'IDLE',
        'Aircraft System State Last Updated (ms)': '101',
        'Gimbal Pitch (Degrees)': -89.0999984741211,
        'Gimbal Roll (Degrees)': 0,
        'Gimbal Yaw (Degrees)': 47.79999923706055,
        'Gimbal Mode': 'YawFollowMode',
        'Gimbal Mode Value': 2,
        'Gimbal Pitch at Stop': 0,
        'Gimbal Roll at Stop': 0,
        'Gimbal Yaw at Stop': 0,
        'Gimbal State Last Updated (ms)': '101',
        'Landing Gear is Movable': true,
        'Landing Gear Status': 'Retracting',
        'Landing Gear Status Value': 4,
        'Landing Gear Mode': 'Auto',
        'Landing Gear Mode Value': 1,
        'RC State': 'null',
        'RC State Value': 0,
        'RC Left Horizontal': true,
        'RC Left Vertical': true,
        'RC Right Horizontal': true,
        'RC Right Vertical': true,
        'RC Left Wheel': '0',
        'RC Right Wheel': '0',
        'RC Landing Gear': 'Not present',
        'RC Landing Gear Value': 254,
        'RC Go Home': false,
        'RC Record': '0',
        'RC Shutter': false,
        'RC Playback': false,
        'RC Pause': false,
        'RC Custom 1': false,
        'RC Custom 2': false,
        'RC State Last Updated (ms)': '0',
        'RC Battery (%)': 0,
        'RC Satellites': '0',
        'RC Horizontal Accuracy (ft)': '0.0',
        'RC Latitude (Degrees)': 0,
        'RC Longitude (Degrees)': 0,
        'RC GPS Last Updated (ms)': '0',
        'RC Signal 1 (%)': '-41',
        'RC Signal 2 (%)': '-42',
        'RC Signal Last Updated (ms)': '100',
        'LB Signal 1 (%)': '-41',
        'LB Signal 2 (%)': '-42',
        'LB Signal Last Updated (ms)': '100',
        'Aircraft Camera Mode': 'null',
        'Aircraft Camera Mode Value': 0,
        'Aircraft Camera Overheated': false,
        'Aircraft Camera Sensor Error': false,
        'Aircraft Camera Recording': false,
        'Aircraft Camera Raw Capture': false,
        'Aircraft Camera Interval Capture': false,
        'Aircraft Camera Burst Capture': false,
        'Aircraft Camera Single Capture': false,
        'Aircraft Camera Storing Photo': false,
        'Aircraft Camera SD Card Exists': true,
        'Aircraft Camera SD Card Remaining (%)': 0,
        'Aircraft Camera Lens Installed': false,
        'Aircraft Camera Lens Type': '0',
        'Aircraft Camera Lens Type Value': '0',
        'Aircraft Camera Lens AF Enabled': false,
        'Aircraft Camera Lens Focus Mode': 'N/A',
        'Aircraft Camera Lens Focus Mode Value': 0,
        'Aircraft Camera Lens Focus Status': 'N/A',
        'Aircraft Camera Lens Focus Status Value': 0,
        'Aircraft Camera Lens MF Assistant': false,
        'Aircraft Camera Lens AF Assistant': false,
        'Aircraft Camera Lens Assistant Working': false,
        'Device > Aircraft Distance - XY (ft)': 0,
        'Aircraft Vel - X': '0.670820415019989',
        'Aircraft Vel - Y': '-0.6000000238418579',
        'Aircraft Vel - Z': '0.30000001192092896',
        'Aircraft Speed (mph)': -4.300000190734863 },
        ...
    ]
}
```

## Contributing  
1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Run the repo**

```bash
yarn install
yarn build  
```

4. **Run tests**
  * To run all test files

  ```bash
     yarn test
  ```

  * To skip test by add x to describe block.

  ```js
     xdescribe("", () => {})
  ```

  * To test only one test case add f to test block.

  ```js
     fit(it('', () => {})
  ```

3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

License
-------

The code is available under the terms of the [MIT License](http://opensource.org/licenses/MIT).
