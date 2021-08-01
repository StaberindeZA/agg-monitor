"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const core_1 = require("@overnightjs/core");
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('valiu:testing');
let CountriesController = class CountriesController {
    get(req, res) {
        try {
            return res.status(200).json({
                data: 'Hello',
            });
        }
        catch (err) {
            console.log(err);
            return res.status(err.response.status).json({
                err_message: err.response.statusText,
            });
        }
    }
};
__decorate([
    core_1.Get('')
], CountriesController.prototype, "get", null);
CountriesController = __decorate([
    core_1.Controller('countries')
], CountriesController);
exports.CountriesController = CountriesController;
//# sourceMappingURL=countries.js.map