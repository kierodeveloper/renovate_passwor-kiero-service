import { Request, Response, response } from 'express';
import bodyParser = require('body-parser');
import modelUser from '../models/user.models'
import sendEmail from '../utility/sendEmail';
import { token } from 'morgan';



//import { axios } from 'axios'
//var axios = require('axios')
//const axios = require('axios')

//import  inserWalkToPay  from '../models/walk-to-pay.models'

//import sendEmail from '../utility/sendEmail'


 
class UserController{
  public async restoreKey(req: Request, res: Response):Promise<any>{    
    var user = await modelUser.updateUsers(req.body)
    res.json(user)
  }

  public async sendEmailToken(req:Request, res: Response):Promise<any>{
    var user = await modelUser.sendEmailToken(req.body)
    res.json(user)
    console.log("Se envio correo")
  }
}
export default new UserController