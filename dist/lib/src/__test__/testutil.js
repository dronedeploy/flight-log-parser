"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIosLogs = void 0;
const path = require('path');
const readFileAsync = require('fs').promises.readFile;
// Maybe we can read all files from one folder?
const ipadFilePath = path.join(__dirname, '/../../testlog/ipad-ios11-phantom4.log');
const ipadMinimalFilePath = path.join(__dirname, '/../../testlog/ipad-ios11-phantom4-minimal.log');
const iphoneFilePath = path.join(__dirname, '/../../testlog/iphone-ios11-inspire.log');
const errorLogFilePath = path.join(__dirname, '/../../testlog/errorLog.log');
function getIosLogs() {
    return __awaiter(this, void 0, void 0, function* () {
        const iosLogs = {
            ipad: yield readFileAsync(ipadFilePath, { encoding: 'utf8' }),
            ipadmin: yield readFileAsync(ipadMinimalFilePath, { encoding: 'utf8' }),
            iphone: yield readFileAsync(iphoneFilePath, { encoding: 'utf8' }),
            errorLog: yield readFileAsync(errorLogFilePath, { encoding: 'utf8' }),
        };
        return iosLogs;
    });
}
exports.getIosLogs = getIosLogs;
//# sourceMappingURL=testutil.js.map