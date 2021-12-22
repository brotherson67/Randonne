const express = require('express');
const router = express.Router();
const db = require('../../config/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all work
router.get('/work', (req, res) => {
    const sql = `SELECT * FROM work`;
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
// GET a single work 
router.get('/work/:id', (req, res) => {
    const sql = `SELECT * FROM work WHERE id = ?`;
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
// Delete a work
router.delete('/work/:id', (req, res) => {
    const sql = `DELETE FROM work WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Work not found'
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
// Create a work
router.post('/work', ({ body }, res) => {
    const errors = inputCheck(body, 'schedule', 'description');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO work (schedule, description)
    VALUES (?, ?)`;
    const params = [body.schedule, body.description];

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