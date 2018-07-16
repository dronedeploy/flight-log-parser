const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const { parseLog } = require ('@dronedeploy/flight-log-parser');
const readFileAsync = promisify(fs.readFile);
const filePath = path.join(__dirname, './sample.log');

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
