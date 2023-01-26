import ProductsModel from "../models/product.model";
import { Request , Response } from "express";
const productTable = new ProductsModel;


export const getAllProduct = async(req : Request, res : Response) => {
    try{
        const data = await productTable.index(); 

        res.json({
            message : `success`, 
            data
        }); 
    }catch (err){  
        throw new Error(`can not get products`)
    }
}

export const getProduct = async(req : Request , res : Response) => {
    try {
        const { id } = req.body; 

        const product = await productTable.getProduct(Number(id));
        
        res.json({
            message : `success` , 
            product
        })
    } catch(err) {
        throw new Error(`could not find product`);
    }
}


export const addProduct = async (req : Request , res : Response) => {
    try {
        const { product_name  , product_alt , product_img_url ,product_catgory} = req.body;


        const productObj = await productTable.addProduct({product_name , product_img_url ,product_alt , product_catgory});
        
        res.json({
            message : `success` ,
            productObj
        }); 
    }catch (err) {
        throw new Error(`could not add product ${err}`);
    }
}


export const removeProduct =async (req: Request , res: Response) => {
    try {
        const { id } = req.body; 

        const removedProduct = await productTable.removeProduct(Number(id)) 
        res.json({
            message : `success` , 
            removedProduct
        });
    }catch(err) {
        throw new Error(`can not remove product`)
    }
}


function* infinte () {
    let index = 55; 
    
    while(true) {
        yield index++;
    }
}

let generator = infinte(); 
