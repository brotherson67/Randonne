const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');


// Get all experience
router.get('/experience', (req, res) => {
    const sql = `SELECT * FROM experience`;
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
// GET a single user experience 
router.get('/experience/:id', (req, res) => {
    const sql = `SELECT * FROM experience WHERE id = ?`;
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
// Delete a user experience
router.delete('/experience/:id', (req, res) => {
    const sql = `DELETE FROM experience WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'User experience not found'
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
// Create a new user experience
router.post('/experience', ({ body }, res) => {
    const errors = inputCheck(body, 'climb_type', 'rocktype', 'climb_level');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO experience (climb_type, rocktype, climb_level)
    VALUES (?, ?)`;
    const params = [body.climb_type, body.rocktype, body.climb_level];

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