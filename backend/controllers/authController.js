const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });

            if (results.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            
            db.query(sql, [username, email, hashedPassword], (err, result) => {
                if (err) return res.status(500).json({ message: 'Database error' });
                
                res.status(201).json({ 
                    message: 'User registered successfully',
                    user: {
                        id: result.insertId,
                        username: username,
                        email: email
                    }
                });
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Static Admin logic
    if (email === 'admin@gmail.com' && password === '1234567890') {
        const token = jwt.sign({ id: 'admin', username: 'Admin', email, role: 'admin' }, 'secretkey123', { expiresIn: '1h' });
        return res.status(200).json({ 
            message: 'Admin login successful', 
            token, 
            user: { id: 'admin', username: 'Admin', email: 'admin@gmail.com', role: 'admin' } 
        });
    }

    try {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });

            if (results.length === 0) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, 'secretkey123', { expiresIn: '1h' });
            
            res.status(200).json({ message: 'Login successful', token, user: { id: user.id, username: user.username, email: user.email } });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getUsers = (req, res) => {
    try {
        db.query('SELECT id, username, email FROM users', (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    try {
        db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(200).json({ message: 'User deleted successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { signup, login, getUsers, deleteUser };
