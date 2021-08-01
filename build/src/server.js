"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggMonitor = void 0;
const core_1 = require("@overnightjs/core");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const countries_1 = require("./controllers/countries");
const users_1 = require("./controllers/users");
class AggMonitor extends core_1.Server {
    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.setupControllers();
        this.setupDatabase();
    }
    setupControllers() {
        super.addControllers([new countries_1.CountriesController(), new users_1.UsersController()]);
    }
    async setupDatabase() {
        const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/agg-monitor-staging';
        try {
            await mongoose_1.default.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    start(port) {
        this.app.listen(port, () => {
            console.log('Server listening on port: ' + port);
        });
    }
}
exports.AggMonitor = AggMonitor;
//# sourceMappingURL=server.js.map