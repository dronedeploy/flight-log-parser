import 'jest';

import { parseLog } from '../parser';
import { FlightLog } from '../types';

const path = require('path');
const fs = require('fs');
const truncatedLog = path.join(__dirname, '/../../testlog/truncated.log');

describe('test parsing troublesome logs', () => {
  describe('truncated log file', () => {
    let parsedLog: FlightLog;

    beforeEach(async () => {
      const log = fs.readFileSync(truncatedLog, { encoding: 'utf8' });
      parsedLog = await parseLog(log);
    });

    it('should approximate a valid elapsed time based on the last log row', () => {
      const { metaData } = parsedLog;

      expect(metaData.session.elapsed).toBe(8.074);
    });

    it('should approximate a valid end date based on the last log row', () => {
      const { metaData } = parsedLog;

      expect((metaData.session.end as Date).toISOString()).toBe('2018-06-04T20:32:38.000Z');
    });
  });

  describe('metadata line with a long run of whitespace', () => {
    it('should parse in linear time', async () => {
      const log = fs.readFileSync(truncatedLog, { encoding: 'utf8' });
      // The embedded U+2028 makes the match fail, which is the case that used to backtrack quadratically.
      const hostile = `Aircraft Name${' '.repeat(100000)}a\u2028b\n${log}`;

      const start = Date.now();
      await parseLog(hostile);

      expect(Date.now() - start).toBeLessThan(2000);
    });
  });
});
