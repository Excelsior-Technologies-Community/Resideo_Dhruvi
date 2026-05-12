const express = require("express");
const router = express.Router();
const controller = require("../controllers/agentController");

router.get("/", controller.getAgents);
router.get("/properties", controller.getAgentProperties);
router.delete("/:id", controller.deleteAgent);

module.exports = router;