import { FlightLog, FlightLogEvent } from './types';
export type Subscriber<T> = (value: T) => void;
export type ErrorSubscriber = (value: any) => void;
export type CompletionSubscriber = () => void;
export interface QuasiObservable<T> {
    subscribe(sub: Subscriber<T>, errSub?: ErrorSubscriber, completionSub?: CompletionSubscriber): void;
    toPromise(): Promise<T>;
}
export declare class QuasiSubject<T> implements QuasiObservable<T> {
    private subscribers;
    private errorSubscribers;
    private completionSubscribers;
    private isFinished;
    next(value: T): void;
    complete(): void;
    error(error: any): void;
    subscribe(sub: Subscriber<T>, errSub?: ErrorSubscriber, completionSub?: CompletionSubscriber): void;
    toPromise(): Promise<T>;
}
export declare function parseLogStream(logStream: QuasiSubject<string>): QuasiObservable<FlightLogEvent>;
export declare function parseLog(log: String): Promise<FlightLog>;
export declare function fromUtcDateStr(utcDateStr: string): Date | null;
