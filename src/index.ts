import {AggMonitor} from './server';
import {User} from './models/users';
import {Client} from './models/clients';
import {Country} from './models/countries';

const aggMonitorServer = new AggMonitor();
const port: number = parseInt(process.env.PORT || '2345');

aggMonitorServer.start(port);
