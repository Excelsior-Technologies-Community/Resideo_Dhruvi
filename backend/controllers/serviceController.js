const db = require("../config/db");

const getServices = (req, res) => {
    db.query("SELECT * FROM services", (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const createService = (req, res) => {
    const { title, description, icon, image } = req.body;
    const sql = 'INSERT INTO services (title, description, icon, image) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, icon, image || ''], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: "Service created successfully",
            service: { id: result.insertId, title, description, icon, image }
        });
    });
};

module.exports = { getServices, createService };
