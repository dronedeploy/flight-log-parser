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
});
