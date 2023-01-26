import express, { Application } from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import productRouer from './router/products.router';
import imageRouter from './router/image.router';
import bodyParser from 'body-parser';
import authRouter from './router/admin.router';
import fileUpload from 'express-fileupload';
dotenv.config(); 

const app : Application = express(); 
const port = process.env.port || 5000; 

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(fileUpload()); 


app.use('/product' , productRouer)
app.use('/images' , imageRouter)
app.use('/admin' , authRouter)
app.listen(port , () => {
    console.log(`app is runing on http://localhost:${port}`)
}); 