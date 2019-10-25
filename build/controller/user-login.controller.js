"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_models_1 = __importDefault(require("../models/user.models"));
//import { axios } from 'axios'
//var axios = require('axios')
//const axios = require('axios')
//import  inserWalkToPay  from '../models/walk-to-pay.models'
//import sendEmail from '../utility/sendEmail'
class UserController {
    restoreKey(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield user_models_1.default.updateUsers(req.body);
            res.json(user);
        });
    }
    sendEmailToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield user_models_1.default.sendEmailToken(req.body);
            res.json(user);
            console.log("Se envio correo");
        });
    }
}
exports.default = new UserController;
