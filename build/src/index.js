"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const aggMonitorServer = new server_1.AggMonitor();
const port = parseInt(process.env.PORT || '2345');
aggMonitorServer.start(port);
//# sourceMappingURL=index.js.map