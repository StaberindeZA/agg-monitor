import {AggMonitor} from './server';
import {User} from './models/users';

const aggMonitorServer = new AggMonitor();
const port: number = parseInt(process.env.PORT || '2345');

aggMonitorServer.start(port);
