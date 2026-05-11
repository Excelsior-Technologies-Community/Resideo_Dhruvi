const express = require("express");
const router = express.Router();

const {
  getWhyChooseData,
} = require("../controllers/whyChooseController");

router.get("/why-choose", getWhyChooseData);

module.exports = router;