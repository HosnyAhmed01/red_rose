import bcrypt from 'bcrypt';
import AdminModel from '../models/admin.model';
import admin from '../interfaces/admin.interface';
import authConfig from '../config/auth.config';
import { TokenPayload } from '../interfaces/auth.interface';
import { AuthData } from '../interfaces/auth.interface';
import jwt from 'jsonwebtoken';


const adminTable = new AdminModel; 


export const registerService = async (user: admin): Promise<admin> => {
    try {
        const hashedPassword = bcrypt.hashSync(
            user.admin_password + authConfig.paper,
            authConfig.round
        )
        user.admin_password = hashedPassword;
        const data = await adminTable.addAdmin(user);  
        return data;
    } catch (error) {
        throw new Error(error as string)
    }
}





export const loginService = async (credentials: admin): Promise<AuthData> => {
    try {
        const admin = await adminTable.getAdmin(credentials.admin_username);
        if (!admin) throw new Error("admin not found")

        // compare password hash
        const isPasswordMatch = await bcrypt.compare(credentials.admin_password + authConfig.paper, admin.admin_password as string);
        if (!isPasswordMatch) throw new Error("Invalid email or password");

        // generate token
        const token = generateToken(admin);

        const authData: AuthData = {
            user: {
                admin_id: Number(admin.admin_id),
                admin_username: admin.admin_username
            },
            token
        }
        return authData;
    } catch (error) {
        throw new Error(error as string)
    }
}

const generateToken = (admin: admin): string => {
    try {
        const payload: TokenPayload = { sub: admin.admin_username , id: Number(admin.admin_id)};
        return jwt.sign(payload, authConfig.jwtSecret, { expiresIn: '10d', issuer: 'dailynews' });
    } catch (error) {
        throw new Error(error as string)
    }
}