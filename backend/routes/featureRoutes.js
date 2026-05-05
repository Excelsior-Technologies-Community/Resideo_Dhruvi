const express = require('express');
const router = express.Router();
const { getFeatures } = require('../controllers/featureController');

router.get('/features', getFeatures);

module.exports = router;