const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all users
router.get('/user', (req, res) => {
    const sql = `SELECT * FROM user`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
          }
          res.json({
            message: 'success',
            data: rows
          });
        });
});
// // GET a single user 
router.get('/user/:id', (req, res) => {
    const sql = `SELECT * FROM user WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: row
        });
      });
});
// // Delete a user
router.delete('/user/:id', (req, res) => {
    const sql = `DELETE FROM user WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'User not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
});
// // Create a user
router.post('/user', ({ body }, res) => {
    const errors = inputCheck(body, 'user_name');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO user (user_name)
    VALUES (?)`;
    const params = [body.user_name];

    db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: body
    });
    });
});


module.exports = router;