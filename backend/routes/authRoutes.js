const express = require('express');
const { signup, login, getUsers } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/users', getUsers);
router.get('/signup', (req, res) => res.status(200).json({ message: "Please use POST method for signup with username, email, and password." }));
router.get('/login', (req, res) => res.status(200).json({ message: "Please use POST method for login with email and password." }));

module.exports = router;
