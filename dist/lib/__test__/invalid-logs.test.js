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
require("jest");
const path_1 = require("path");
const fs_1 = require("fs");
const parser_1 = require("../parser");
const truncatedLog = path_1.default.join(__dirname, '/../../testlog/truncated.log');
describe('test parsing troublesome logs', () => {
    describe('truncated log file', () => {
        let parsedLog;
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            const log = fs_1.default.readFileSync(truncatedLog, { encoding: 'utf8' });
            parsedLog = yield (0, parser_1.parseLog)(log);
        }));
        it('should approximate a valid elapsed time based on the last log row', () => {
            const { metaData } = parsedLog;
            expect(metaData.session.elapsed).toBe(8.074);
        });
        it('should approximate a valid end date based on the last log row', () => {
            const { metaData } = parsedLog;
            expect(metaData.session.end.toISOString()).toBe('2018-06-04T20:32:38.000Z');
        });
    });
});
//# sourceMappingURL=invalid-logs.test.js.map