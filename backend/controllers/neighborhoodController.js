const db = require("../config/db");

exports.getNeighborhoods = (req, res) => {
  const start = parseInt(req.query.start) || 0;
  const limit = 3;

  db.query("CALL getNeighborhoods(?, ?)", [start, limit], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
};