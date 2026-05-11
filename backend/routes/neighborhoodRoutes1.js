const express = require("express");

const router = express.Router();

const {
  getNeighborhoods,
} = require("../controllers/neighborhoodController1");

router.get("/neighborhoods-demo", getNeighborhoods);

module.exports = router;