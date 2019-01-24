CREATE DATABASE allgreenorganic;

USE allgreenorganic;

CREATE TABLE suppliers(
id INTEGER AUTO_INCREMENT NOT NULL,
farmers_name VARCHAR(100) NOT NULL,
farmers_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
hours_operation VARCHAR(100) NOT NULL,
rating DECIMAL(4,2),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(id)
);

CREATE TABLE customers(
id INTEGER AUTO_INCREMENT NOT NULL,
customer_name VARCHAR(100) NOT NULL,
customer_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(id)
);




