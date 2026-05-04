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

module.exports = { getServices };
