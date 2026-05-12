const db = require('../config/db');

exports.getAgents = (req, res) => {
  db.query("SELECT * FROM agents", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getAgentProperties = (req, res) => {
  db.query("SELECT * FROM agent_properties", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.deleteAgent = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM agents WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Agent deleted successfully" });
  });
};