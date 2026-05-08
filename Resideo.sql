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

CREATE TABLE agent_properties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    price VARCHAR(100),
    details VARCHAR(255),
    image VARCHAR(255)
);

INSERT INTO agent_properties (title, price, details, image) VALUES

('Fabulous Little Apartment', '$2,475 /mo', '2 BD | 1 BA | 975 SF', 'img1.png'),

('Awesome Interior Apartment', '$1,240,000', '4 BD | 2 BA | 2600 SF', 'img2.png'),

('Elegant Apartment', '$2,650 /mo', '1 BD | 1 BA | 675 SF', 'img3.png'),

('Modern Apartment in Mission District', '$1,495,000', '5 BD | 4 BA | 2268 SF', 'img4.png');

CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100),
    title VARCHAR(255),
    description TEXT,
    image VARCHAR(255),
    featured BOOLEAN DEFAULT false
);

INSERT INTO articles (category, title, description, image, featured) VALUES
('LIVING ROOM', 'How Does A Designer Home Look Like', 'Have realistic expectations Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice....', 'house1.jpeg', true),
('ARCHITECTURE', 'The Secrets of Modern Architecture', 'Learn about the principles that define modern architecture and how they influence the spaces we live and work in today...', 'house2.jpeg', false),
('INTERIOR DESIGN', 'Tips for a Minimalist Home', 'Minimalism is more than just a design trend. It is a lifestyle choice that can lead to a more peaceful and organized environment...', 'house3.jpeg', false);

CREATE TABLE blog_articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(100),
    title VARCHAR(255),
    article_date VARCHAR(100),
    image VARCHAR(255)
);

INSERT INTO blog_articles (category, title, article_date, image) VALUES
('ARCHITECTURE', 'Private Contemporary Home Balancing Openness', 'July 7, 2020', 'house7.jpg'),

('ARCHITECTURE', 'What to Expect When Working with an Interior Designer', 'July 7, 2020', 'house6.jpg'),

('LIVING ROOM', 'How Does A Designer Home Look Like', 'July 7, 2020', 'house5.jpg'),

('APARTMENTS', 'Luminous 3 Bedroom Apartment Flaunting Modern Style', 'July 7, 2020', 'house4.jpg'),

('BEDROOM', 'Bedroom Interior Dark Theme', 'July 7, 2020', 'house3.jpg'),

('KITCHEN', 'Modern Kitchen Interior Ideas', 'July 7, 2020', 'house2.jpg');