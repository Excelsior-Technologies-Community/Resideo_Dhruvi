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

