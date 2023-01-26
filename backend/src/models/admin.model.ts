import client from "../database";
import admin from "../interfaces/admin.interface";



class AdminModel {
    async getAdmin (admin_username : string) : Promise<admin>{
        const conn = await client.connect(); 

        const sql = `SELECT * FROM admins WHERE admin_username=$1`;

        const res = await conn.query(sql , [admin_username]); 

        conn.release();
        
        return await(res).rows[0]; 
    }

    async addAdmin (A : admin) {
        const conn = await client.connect(); 

        const sql = `INSERT INTO admins(admin_username , admin_password) VALUES ($1 , $2) RETURNING *`

        const res = await conn.query(sql , [A.admin_username , A.admin_password]);
        
        conn.release(); 

        return await(res).rows[0];
    }
}

export default AdminModel;