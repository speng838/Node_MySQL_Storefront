DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NULL,
	department_name VARCHAR(100) NULL,
	price DECIMAL (10,4) NULL,
	stock_quantity INTEGER(10),
	PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jordans", "Shoe", 98.99, 19);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mask", "retail", 15.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mechanical pencil", "accessories", 3.99, 80);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("legos", "toy", 25.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("phone", "electronics", 599.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nikes", "Shoe", 59.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Addidas", "Shoe", 79.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("doll", "toy", 15.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamp", "accessories", 20.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nba jersey", "retail", 55.99, 6);
