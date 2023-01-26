import { Router } from "express";
import { getAllProduct ,  getProduct , addProduct , removeProduct} from "../controlers/product.controlors";
const productRouer = Router();


productRouer.get('/products' , getAllProduct );
productRouer.get('/getproduct' , getProduct); 
productRouer.post('/addproduct' , addProduct);
productRouer.delete('/removeproduct' , removeProduct); 
export default productRouer;