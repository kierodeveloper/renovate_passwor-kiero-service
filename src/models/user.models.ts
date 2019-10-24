//const pool = require('../database');
import * as sql from 'mssql';
import pool from '../database'


import { promises } from 'fs';
import sendEmail from '../utility/sendEmail';
import { Request, Response } from 'express';

class UserModel{
  public respuesta:any
  public async updateUsers(res:any):Promise<any>{
    const user = `UPDATE users SET password = '${res.password}' WHERE token_renovate_password like  '${res.token}'`;
      try{
      var poolResponse = pool.connect().then( async () => {
        const request = new sql.Request(pool);
        const result =  await request.query(user);
        return {message:"ok"}
      })
      return poolResponse
    }catch(err){
      console.log("error");      
    }
    
  }
}

const userModel = new UserModel;
export default userModel;
