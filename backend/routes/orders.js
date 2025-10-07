const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all orders
router.get('/', (req, res) => {
  db.query('SELECT * FROM orders', (err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result);
  });
});

// Add new order
router.post('/', (req, res) => {
  const { user_id, product_id, quantity, total_price, status } = req.body;
  db.query(
    'INSERT INTO orders (user_id, product_id, quantity, total_price, status, order_date) VALUES (?, ?, ?, ?, ?, NOW())',
    [user_id, product_id, quantity, total_price, status],
    (err, result) => {
      if (err) res.status(500).send(err);
      else res.send("✅ Order placed successfully");
    }
  );
});

module.exports = router;
