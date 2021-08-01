"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const core_1 = require("@overnightjs/core");
const users_1 = require("../models/users");
let UsersController = class UsersController {
    async list(req, res) {
        const users = await users_1.User.find().limit(10);
        res.json(users);
    }
    async create(req, res) {
        const body = req.body;
        const user = new users_1.User(body);
        await user.save();
        res.json(user);
    }
};
__decorate([
    core_1.Get('')
], UsersController.prototype, "list", null);
__decorate([
    core_1.Post()
], UsersController.prototype, "create", null);
UsersController = __decorate([
    core_1.Controller('users')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.js.map