const db = require('../config/db');

exports.getArticles = (req, res) => {
    db.query('SELECT * FROM articles', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
};
