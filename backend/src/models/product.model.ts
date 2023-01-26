import client from "../database";
import product from "../interfaces/product.interface";

class ProductsModel {
    async index () : Promise<product[]>{
        const conn = await client.connect(); 

        const sql = `SELECT * FROM products`; 

        const res = await conn.query(sql);
        
        conn.release(); 

        return await(res).rows;
    }

    async getProduct(id : number) : Promise<product>{
        const conn = await client.connect(); 

        const sql = `SELECT * FROM products WHERE product_id=$1`; 

        const res =  await(conn).query(sql , [id]);
        
        conn.release(); 

        return await(res).rows[0];
    }

    async removeProduct (id : number) {
        const conn = await client.connect(); 

        const sql = `DELETE  FROM products WHERE product_id=$1`; 

        const res = await conn.query(sql , [id]);
        
        conn.release(); 

        return await(res).rows[0];
    }

    async addProduct (P : product) : Promise<product> {
        const conn = await client.connect(); 

        const sql = `INSERT INTO products(product_name, product_img_url , product_alt , product_catgory) VALUES ($1,$2,$3 ,$4)`; 

        const res = await conn.query(sql , [P.product_name , P.product_img_url , P.product_alt , P.product_catgory]);
        
        conn.release(); 

        return await(res).rows[0];
    }
}


export default ProductsModel;