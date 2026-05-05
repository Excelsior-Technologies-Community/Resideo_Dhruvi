const db = require('./config/db');

const sql = `
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    number VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL
);
`;

db.query(sql, (err) => {
    if (err) {
        console.error("Error creating contacts table:", err);
    } else {
        console.log("Contacts table created successfully.");
    }
    process.exit(0);
});
