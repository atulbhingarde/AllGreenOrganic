CREATE DATABASE allgreenorganic;

USE allgreenorganic;

CREATE TABLE contacts(
item_id INTEGER AUTO_INCREMENT NOT NULL,
suppliers VARCHAR(100) NOT NULL,
farmers_address VARCHAR(100) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
hours_operation VARCHAR(100) NOT NULL,
rating DECIMAL(4,2),
PRIMARY KEY(item_id)
);


