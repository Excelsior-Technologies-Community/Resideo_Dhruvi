const express = require("express");
const router = express.Router();
const { getNeighborhoods } = require("../controllers/neighborhoodController");

router.get("/", getNeighborhoods);

module.exports = router;