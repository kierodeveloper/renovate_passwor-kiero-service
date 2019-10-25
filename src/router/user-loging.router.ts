import { Router } from 'express'
import  path from 'path'
import userController from '../controller/user-login.controller'
 
 
//import {  } from './templates'
 
class UserRoutes{
    router:Router = Router();
 
     constructor(){
          this.config();
     }
     config():void{
          this.router.post('/restore/user',userController.restoreKey);
          this.router.post('/send/emailToken',userController.sendEmailToken);         
     }
}
 
export default new UserRoutes().router;
//export default walkToPay_Routes.router;
