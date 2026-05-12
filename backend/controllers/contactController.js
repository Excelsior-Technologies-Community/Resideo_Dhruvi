const db = require("../config/db");

const createContact = (req, res) => {
    const { name, number, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
    }

    const sql = 'INSERT INTO contacts (name, number, email, message) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, number, email, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(201).json({
            message: "Message sent successfully!",
            contact: { id: result.insertId, name, number, email, message }
        });
    });
};

const getContacts = (req, res) => {
    db.query("SELECT * FROM contacts", (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(results);
    });
};

const deleteContact = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM contacts WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.status(200).json({ message: "Contact deleted successfully" });
    });
};

module.exports = { createContact, getContacts, deleteContact };
