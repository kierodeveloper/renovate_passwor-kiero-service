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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const pool = require('../database');
const sql = __importStar(require("mssql"));
const database_1 = __importDefault(require("../database"));
class UserModel {
    updateUsers(res) {
        return __awaiter(this, void 0, void 0, function* () {
            var token = 'jose1245';
            var token1 = 'jose';
            const user = `UPDATE users SET token_renovate_password = '${token1}' WHERE token_renovate_password like  '${token}'`;
            //const user = `select *  from users where token_renovate_password like '${token}'`;
            try {
                var poolResponse = database_1.default.connect().then(() => __awaiter(this, void 0, void 0, function* () {
                    const request = new sql.Request(database_1.default);
                    const result = yield request.query(user);
                    return { message: "ok" };
                }));
                return poolResponse;
            }
            catch (err) {
                console.log("error");
            }
        });
    }
}
const userModel = new UserModel;
exports.default = userModel;
