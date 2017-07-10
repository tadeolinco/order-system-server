DROP USER IF EXISTS 'orderSystem'@'localhost';
CREATE USER 'orderSystem'@'localhost' IDENTIFIED BY 'admin';
DROP DATABASE IF EXISTS orderSystem;
CREATE DATABASE orderSystem;
GRANT SUPER ON *.* TO 'orderSystem'@'localhost';
GRANT ALL PRIVILEGES ON orderSystem.* TO 'orderSystem'@'localhost' WITH GRANT OPTION;

USE orderSystem;

CREATE TABLE customers (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  UNIQUE KEY(name)
);

CREATE TABLE menus (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  UNIQUE KEY(name)
);

CREATE TABLE menuItems (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL, 
  isAvailable BOOLEAN DEFAULT true,
  menuId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(menuId) REFERENCES menus(id) ON DELETE CASCADE
);

CREATE TABLE customerOrders (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  hasBeenServed BOOLEAN DEFAULT false,
  customerId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(customerId) REFERENCES customers(id) ON DELETE CASCADE
);
