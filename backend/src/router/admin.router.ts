import { Router } from "express";
import { loginController, registerController } from "../controlers/auth.conteroller";


const authRouter = Router(); 


authRouter.post('/addadmin' , registerController); 
authRouter.post('/getadmin' , loginController); 

export default authRouter;