const express = require("express");
const router = express.Router();
const controller = require("../controllers/propertyController");

router.get("/", controller.getProperties);
router.delete("/:id", controller.deleteProperty);

module.exports = router;