import { Router } from 'express'; 
import getImage , { uploadImage} from '../controlers/image.controler';
import { addProduct } from '../controlers/product.controlors';
import { authGuard } from '../middelwares/auth.middle';

const imageRouter= Router(); 
imageRouter.get('/getimage'  , getImage);
imageRouter.post('/uploadimage', authGuard , uploadImage , addProduct); 
export default imageRouter;