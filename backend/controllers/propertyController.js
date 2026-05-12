const db = require("../config/db");

exports.getProperties = (req, res) => {
  db.query("SELECT * FROM properties", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.deleteProperty = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM properties WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Property deleted successfully" });
  });
};