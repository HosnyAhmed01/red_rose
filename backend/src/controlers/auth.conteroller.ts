import { Request , Response } from "express";
import { registerService } from '../services/auth.service';
import { loginService } from '../services/auth.service';
import AdminModel from '../models/admin.model';

const adminTable = new AdminModel; 


export const registerController = async(req : Request ,res : Response) : Promise<void> => {
    try {
        const { admin_username , admin_password } = req.body;
        const data = await registerService({ admin_password , admin_username });
        res.json({
            messege: "user created",
            data : data
        })
    } catch (err) {
        throw new Error(err as string);
    }
}

export const loginController = async (req : Request , res : Response) : Promise<void> =>{
    try {

        const {admin_username , admin_password} = req.body;
        console.log({admin_username, admin_password})
       const data = await loginService({ admin_username, admin_password}); 
        res.status(200)
        .json({
            messege : "loged in" , 
            data : data
        });
        
    } catch (err) {
        throw new Error(`can not login please try again ${err}`);
    }
}