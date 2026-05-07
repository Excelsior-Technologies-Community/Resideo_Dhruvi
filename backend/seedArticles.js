const db = require('./config/db');

const sql = `
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100),
    title VARCHAR(255),
    description TEXT,
    image VARCHAR(255),
    featured BOOLEAN DEFAULT false
);
`;

const truncate = `TRUNCATE TABLE articles;`;

const insert = `
INSERT INTO articles (category, title, description, image, featured) VALUES
('LIVING ROOM', 'How Does A Designer Home Look Like', 'Have realistic expectations Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice....', 'house1.jpeg', true),
('ARCHITECTURE', 'The Secrets of Modern Architecture', 'Learn about the principles that define modern architecture and how they influence the spaces we live and work in today...', 'house2.jpeg', false),
('INTERIOR DESIGN', 'Tips for a Minimalist Home', 'Minimalism is more than just a design trend. It is a lifestyle choice that can lead to a more peaceful and organized environment...', 'house3.jpeg', false);
`;

db.query(sql, (err) => {
    if (err) throw err;
    db.query(truncate, (err) => {
        if (err) throw err;
        db.query(insert, (err) => {
            if (err) throw err;
            console.log("Articles seeded successfully.");
            process.exit(0);
        });
    });
});
