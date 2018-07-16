const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const { parseLog } = require ('../flight-log-parser.js');
const readFileAsync = promisify(fs.readFile);
const filePath = path.join(__dirname, '/../../testlog/ipad-ios11-phantom4.log');

readFileAsync(filePath, {encoding: 'utf8'})
  .then((text) => {
      // parseLog() returns a FlightLog object
      parseLog(text).then(result => {
        console.log('parsedFlightLog', result);
      })
  })
  .catch((err) => {
      console.log('ERROR:', err);
  });
