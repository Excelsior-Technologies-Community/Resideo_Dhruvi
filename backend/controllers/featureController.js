const db = require('../config/db');

exports.getFeatures = (req, res) => {
  db.query("SELECT * FROM features", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};