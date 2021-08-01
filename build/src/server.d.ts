import { Server } from '@overnightjs/core';
export declare class AggMonitor extends Server {
    constructor();
    private setupControllers;
    private setupDatabase;
    start(port: number): void;
}
