import { FlightLogRow, FlightLogMetaData, FlightLog } from './types';
import { Observable } from "rxjs";
export interface LogEvent {
    meta: FlightLogMetaData;
    rowIndex?: Number;
    row?: FlightLogRow;
}
export declare function parseLogStream(logStream: Observable<string>): Observable<LogEvent>;
export declare function parseLog(log: String): Promise<FlightLog>;
export declare function fromUtcDateStr(utcDateStr: string): Date | null;
