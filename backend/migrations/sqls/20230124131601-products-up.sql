CREATE TABLE products (
    product_id SERIAL PRIMARY KEY ,
    product_name VARCHAR(20) NOT NULL ,
    product_img_url TEXT,
    product_alt TEXT, 
    product_catgory VARCHAR(30)
); 