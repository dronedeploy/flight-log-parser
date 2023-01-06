const path = require('path');
const readFileAsync = require('fs').promises.readFile;
// Maybe we can read all files from one folder?

const ipadFilePath = path.join(__dirname, '/../../testlog/ipad-ios11-phantom4.log');
const ipadMinimalFilePath = path.join(__dirname, '/../../testlog/ipad-ios11-phantom4-minimal.log');
const iphoneFilePath = path.join(__dirname, '/../../testlog/iphone-ios11-inspire.log');
const errorLogFilePath = path.join(__dirname, '/../../testlog/errorLog.log');

export async function getIosLogs() {
    const iosLogs = {
        ipad: await readFileAsync(ipadFilePath, { encoding: 'utf8' }),
        ipadmin: await readFileAsync(ipadMinimalFilePath, { encoding: 'utf8' }),
        iphone: await readFileAsync(iphoneFilePath, { encoding: 'utf8' }),
        errorLog: await readFileAsync(errorLogFilePath, { encoding: 'utf8' }),
    };
    return iosLogs;
}
