const db = require('./config/db');

const sql = `
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    icon VARCHAR(50),
    image VARCHAR(255)
);
`;

const truncate = `TRUNCATE TABLE services;`;

const insert = `
INSERT INTO services (title, description, icon, image) VALUES 
('Buy a home', 'Find your place with an immersive photo experience and the most listings, including things you won\\'t find anywhere else.', 'fa-house', 'img1.png'), 
('Sell a home', 'Whether you get a cash offer through Resideo or choose to sell traditionally, we can help you navigate a successful sale.', 'fa-wallet', 'img2.png'), 
('Rent a home', 'We\\'re creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.', 'fa-handshake', 'img3.png');
`;

db.query(sql, (err) => {
    if (err) throw err;
    db.query(truncate, (err) => {
        if (err) throw err;
        db.query(insert, (err) => {
            if (err) throw err;
            console.log("Services seeded successfully.");
            process.exit(0);
        });
    });
});
