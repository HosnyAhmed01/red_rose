import db_config from './config/database.config'; 
import { Pool } from 'pg';
const client = new Pool({
    database: db_config.DB_NAME, 
    port : Number(db_config.DB_PORT) , 
    user: db_config.DB_USER,
    host: db_config.DB_HOST ,
    password: db_config.DB_PASSWORD 
}); 

export default client; 