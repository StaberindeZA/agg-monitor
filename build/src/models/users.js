"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const schema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    email: String,
    firstName: String,
    lastName: String,
    role: { type: String, enum: ['superadmin', 'admin', 'assistant'] },
});
exports.User = mongoose_1.default.model('User', schema);
//# sourceMappingURL=users.js.map