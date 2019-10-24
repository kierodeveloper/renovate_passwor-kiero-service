import { Request, Response, response } from 'express';
import bodyParser = require('body-parser');
import modelUser from '../models/user.models'



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
}
export default new UserController