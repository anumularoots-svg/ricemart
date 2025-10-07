const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result);
  });
});

// Register user
router.post('/register', (req, res) => {
  const { name, email, password, address } = req.body;
  db.query(
    'INSERT INTO users (name, email, password, address) VALUES (?, ?, ?, ?)',
    [name, email, password, address],
    (err, result) => {
      if (err) res.status(500).send(err);
      else res.send("✅ User registered successfully");
    }
  );
});

module.exports = router;
