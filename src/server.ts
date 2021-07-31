import * as bodyParser from 'body-parser';
import {Server} from '@overnightjs/core';
import {ClientsController} from './controllers/clients';

export class SampleServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.setupControllers();
  }

  private setupControllers(): void {
    const clientsController = new ClientsController();
    super.addControllers([clientsController]);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log('Server listening on port: ' + port);
    });
  }
}
