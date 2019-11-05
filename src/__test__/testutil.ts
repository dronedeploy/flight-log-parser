import { promisify } from "util";
import fs from "fs";
import path from "path";

const readFileAsync = promisify(fs.readFile);

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
