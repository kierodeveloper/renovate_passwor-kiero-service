//const pool = require('../database');
import * as sql from 'mssql';
import pool from '../database'
var randtoken = require('rand-token');


import { promises } from 'fs';
import sendEmail from '../utility/sendEmail';
import { Request, Response } from 'express';

class UserModel {
  public respuesta: any
  public async updateUsers(res: any): Promise<any> {
    const user = `UPDATE users SET password = '${res.password}' WHERE token_renovate_password like  '${res.token}'`;
    try {
      var poolResponse = pool.connect().then(async () => {
        const request = new sql.Request(pool);
        const result = await request.query(user);
        pool.close();
        if (result.rowsAffected[0] == 0) {
          return { message: "Usuario incorrecto" }
        } else {
          var token = randtoken.generate(20);
          const user = `UPDATE users SET token_renovate_password = '${token}' WHERE token_renovate_password like  '${res.token}'`;
          try {
            var poolResponse = pool.connect().then(async () => {
              const request = new sql.Request(pool);
              const result = await request.query(user);
              pool.close();              
            })
            return poolResponse;
          } catch (err) {
            console.error("error")
          }
          return { message: "ok" }
        }
      })
      return poolResponse
    } catch (err) {
      console.log("error");
    }
  }
  // --------------sendEmailToken: Usuario token-----------------\\
  public async sendEmailToken(req: any) {
    var token = randtoken.generate(20);
    const user = `UPDATE users SET token_renovate_password = '${token}' WHERE email like  '${req.email}'`;
    try {
      var poolResponse = pool.connect().then(async () => {
        const request = new sql.Request(pool);
        const result = await request.query(user);
        pool.close();
        if (result.rowsAffected[0] == 0) {
          return { message: "Usuario incorrecto" }
        } else {
          sendEmail.sendMail(req, token)
          return { message: "ok" }
        }
      })
      return poolResponse;
    } catch (err) {
      console.error("error")
    }

  }
}

const userModel = new UserModel;
export default userModel;
