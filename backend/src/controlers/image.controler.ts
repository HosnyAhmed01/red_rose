import { Request, Response  , NextFunction} from 'express';
import path from 'path';
import expressFile, { UploadedFile } from 'express-fileupload';
import ProductsModel from '../models/product.model';


const productTable = new ProductsModel;
const getImage = async (req: Request, res: Response) => {
    try {
        const { image_name } = req.query;

        res.sendFile(`${path.resolve()}/src/resizedImage/${image_name}`);
    } catch (err) {
        throw new Error(`could not get image`);
    }
}


export const uploadImage = async (req: Request, res: Response) => {
    try {
        const file = req.files;
        const { product_name  , product_alt  ,product_catgory} = req.body;

        if (!file) {
            res.status(400).send(`no file uploaded`);
        }
        const image = req.files!.image as UploadedFile;
        const extension = image.name.split('.');
        const uploadPath = `${path.resolve()}/src/resizedImage/red_rose_${generator.next().value}.${extension[extension.length - 1]}`;
        const upload_path_arr =uploadPath.split('/');
        const new_product = await productTable.addProduct({product_name , 
         product_alt, product_img_url : `http://localhost:3000/images/getimage?image_name=${upload_path_arr[upload_path_arr.length -1]}` , product_catgory}); 

        image.mv(uploadPath, (err) => {
            if (!err) {
                res.status(500).send(err)
            }
        })
       
        
        res.json({
            message: 'success',
            new_product
        });
    } catch (err) {
        throw new Error(`could not update image  ${err}`);
    }


}


function* infinte () {
    let index = 55; 
    
    while(true) {
        yield index++;
    }
}

let generator = infinte(); 

export default getImage;