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

