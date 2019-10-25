"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_login_controller_1 = __importDefault(require("../controller/user-login.controller"));
//import {  } from './templates'
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/restore/user', user_login_controller_1.default.restoreKey);
        this.router.post('/send/emailToken', user_login_controller_1.default.sendEmailToken);
    }
}
exports.default = new UserRoutes().router;
//export default walkToPay_Routes.router;
