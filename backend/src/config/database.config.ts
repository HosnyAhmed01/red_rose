import dotenv from 'dotenv'; 

dotenv.config(); 

const {
    dev,
    port,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_NAME_TEST,
    DB_HOST
} = process.env;

export default {
    dev,
    port,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_NAME_TEST,
    DB_HOST
}