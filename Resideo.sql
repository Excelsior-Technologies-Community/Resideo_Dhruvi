CREATE DATABASE resideo;
USE resideo;

CREATE TABLE neighborhoods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
    image VARCHAR(255)
);

INSERT INTO neighborhoods (name, city, image) VALUES
('Marina District', 'San Francisco', 'img1.png'),
('Sea Cliff', 'San Francisco', 'img2.png'),
('Noe Valley', 'San Francisco', 'img3.png'),
('Sunset', 'San Francisco', 'img4.png'),
('Mission', 'San Francisco', 'img1.png');

DELIMITER $$

CREATE PROCEDURE getNeighborhoods(IN startIndex INT, IN limitCount INT)
BEGIN
    SELECT * FROM neighborhoods
    LIMIT startIndex, limitCount;
END $$

DELIMITER ;

CREATE TABLE features (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  icon VARCHAR(100)
);

INSERT INTO features (title, description, icon) VALUES
('Find your future home', 'We help you find a new home by offering a smart real estate experience', 'fa-home'),
('Experienced agents', 'Find an experienced agent who knows your market best', 'fa-handshake'),
('Buy or rent homes', 'Millions of houses and apartments in your favourite cities', 'fa-wallet'),
('List your own property', 'Sign up now and sell or rent your own properties', 'fa-cloud-upload-alt');

select * from contacts;

CREATE TABLE properties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  price VARCHAR(50),
  type VARCHAR(50),
  beds INT,
  baths INT,
  area INT,
  image VARCHAR(255),
  featured BOOLEAN DEFAULT false
);

drop table properties;
INSERT INTO properties (title, price, type, beds, baths, area, image, featured) VALUES
('Awesome Interior Apartment', '$1,240,000', 'Apartment', 4, 2, 2600, 'house1.jpeg', true),
('Colorful Little Apartment', '$2,675/mo', 'Apartment', 1, 1, 500, 'house2.jpeg', true),
('Remarkable Home on a Budget', '$4,500/mo', 'House', 2, 1, 2000, 'house3.jpeg', true),
('Wonderful View House', '$3,495,000', 'House', 5, 4, 4816, 'house4.jpeg', true),
('Luxury Mansion', '$5,430,000', 'Villa', 4, 5, 5200, 'house5.jpeg', true),
('Modern Residence', '$7,995/mo', 'Apartment', 4, 2, 240, 'house6.jpeg', true);

INSERT INTO properties (title, price, type, beds, baths, area, image, featured) VALUES
('Awesome Interior Apartment', '$1,240,000', 'Apartment', 4, 2, 2600, 'house1.jpeg', true),
('Colorful Little Apartment', '$2,675/mo', 'Apartment', 1, 1, 500, 'house2.jpeg', true),
('Remarkable Home on a Budget', '$4,500/mo', 'House', 2, 1, 2000, 'house3.jpeg', true),
('Wonderful View House', '$3,495,000', 'House', 5, 4, 4816, 'house4.jpeg', true),
('Luxury Mansion', '$5,430,000', 'Villa', 4, 5, 5200, 'house5.jpeg', true),
('Modern Residence', '$7,995/mo', 'Apartment', 4, 2, 240, 'house6.jpeg', true);

CREATE TABLE agents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20),
  image VARCHAR(255)
);

INSERT INTO agents (name, phone, image) VALUES
('Melvin Blackwell', '(123) 456-7890', 'user1.png'),
('Alayna Becker', '(123) 456-7890', 'user2.png'),
('Scott Goodwin', '(123) 456-7890', 'user3.png'),
('Erika Tillman', '(123) 456-7890', 'user1.png');