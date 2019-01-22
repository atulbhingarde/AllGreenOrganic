CREATE DATABASE allgreenorganic;

USE bamazon;

CREATE TABLE products(

item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
farmers_name VARCHAR(100) NOT NULL
product_name VARCHAR(100) NOT NULL,
farmers_address VARCHAR(100) NOT NULL
phone_number (11) INTEGER NOT NULL
department_name VARCHAR(100) NOT NULL,
hours_operation VARCHAR(100) NOT NULL
price DECIMAL(11,2) NOT NULL,
stock_quantity(11) INTEGER NOT NULL,
PRIMARY KEY(item_id)
);