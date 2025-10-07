const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all products
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) {
      console.error("❌ Error fetching products:", err);
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// Add new product
router.post('/', (req, res) => {
  const { name, brand, price, stock, image_url, description } = req.body;
  db.query(
    'INSERT INTO products (name, brand, price, stock, image_url, description) VALUES (?, ?, ?, ?, ?, ?)',
    [name, brand, price, stock, image_url, description],
    (err, result) => {
      if (err) res.status(500).send(err);
      else res.send("✅ Product added successfully");
    }
  );
});

module.exports = router;
