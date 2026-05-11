const db = require("../config/db");

const getNeighborhoods = (req, res) => {

  const sql = "SELECT * FROM neighborhoods1";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    res.status(200).json(result);

  });

};

module.exports = {
  getNeighborhoods,
};