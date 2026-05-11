const db = require("../config/db");

const getWhyChooseData = (req, res) => {
  const sql = "SELECT * FROM why_choose_cards";

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
  getWhyChooseData,
};