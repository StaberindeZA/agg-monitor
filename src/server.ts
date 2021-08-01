import {Server} from '@overnightjs/core';
import express from 'express';
import mongoose from 'mongoose';
import {CountriesController} from './controllers/countries';
import {UsersController} from './controllers/users';

export class AggMonitor extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.setupControllers();
    this.setupDatabase();
  }

  private setupControllers(): void {
    super.addControllers([new CountriesController(), new UsersController()]);
  }

  private async setupDatabase(): Promise<void> {
    const mongoUri =
      process.env.MONGO_URI || 'mongodb://localhost:27017/agg-monitor-staging';
    try {
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log('Server listening on port: ' + port);
    });
  }
}
