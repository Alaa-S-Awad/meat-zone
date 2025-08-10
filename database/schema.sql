
CREATE TABLE menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name_en VARCHAR(100),
  name_ar VARCHAR(100),
  category VARCHAR(50),
  price FLOAT,
  calories INT
);

CREATE TABLE tables (
  id INT AUTO_INCREMENT PRIMARY KEY,
  number INT,
  status ENUM('available', 'occupied') DEFAULT 'available'
);

CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  table_id INT,
  customer_name VARCHAR(100),
  customer_phone VARCHAR(20),
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  table_id INT,
  status ENUM('pending', 'preparing', 'ready', 'served') DEFAULT 'pending',
  total_price FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  menu_item_id INT,
  quantity INT
);
