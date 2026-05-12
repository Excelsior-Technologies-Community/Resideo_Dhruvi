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

exports.deleteArticle = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM articles WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Article deleted successfully' });
    });
};
