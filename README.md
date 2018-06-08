# TODO

1. Test on a variety of logs from iOS and Android
2. Write unit tests
3. Fill out `src/field-types.ts`
4. See if we can improve types in general
5. Open source-ify with good readme, license, and type definitions

# For testing
1. To run all test files

```bash
yarn test
```

* To skip test by add x to describe block.

```js
   xdescribe("", () => {})
```

- - -

Flight log parser is a [JavaScript library](https://en.wikipedia.org/wiki/JavaScript_library) for parse [DJI flight logs](https://forum.dji.com/thread-114810-1-1.html). It transform a .log/.txt file into an JS object with property metaData and rows.


```js
//Sample result:
 {
    metaData : {
        appVersion: '2.75.0',
        session:
         { id: '5b15bcec1fae218a83b7e76a',
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
           firmware: '03.09.00.00' },
        flightController: { serialNumber: 'N/A', firmware: '02.04.20.50' },
        gimbal: { firmware: '01.31.01.67' },
        remoteController: { serialNumber: '03LL264834', firmware: '1.2.0.17' },
        camera: { serialNumber: 'N/A' }
    },
    rows: [{}]
}
```

## Installation

### In Node.js

```bash
npm install flight-log-parser ?
```
### TypeScript

TypeScript is supported internally within each module, no installs required.

## How to use

### In .js file

```js
import { parseLog } from 'flight-log-parser';
const data = parseLog(someTextFromSomewhere);
```
