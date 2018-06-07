import 'jest';
import path from 'path';
import fs from 'fs';
import {promisify} from 'util';

import { parseLog } from './parser';

const readFileAsync = promisify(fs.readFile);
const iosfilePath = path.join(__dirname, '../testlog/android.log');
const androidFilePath = path.join(__dirname, '../testlog/ios11-2.log');

let parsedLog : any;
beforeAll(() => {
    readFileAsync(iosfilePath, {encoding: 'utf8'})
      .then((text) => {
          parseLog(text).then((result) => {
              // console.log('result:', result);
              parsedLog = result;
              return parsedLog;
          });
      })
      .catch((err) => {
          console.log('ERROR:', err);
      });

});

describe('Users', () => {
    it('adds 1 + 2 to equal 3 in JavaScript', ()=> {
      expect(3).toBe(3);
      // expect(parsedLog).toBeTruthy();
    });
});
