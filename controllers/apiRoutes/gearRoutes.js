const express = require('express');
const router = express.Router();
const db = require('../../config/connection');
const inputCheck = require('../../utils/inputCheck');


// Get all gear
router.get('/gear', (req, res) => {
    const sql = `SELECT * FROM gear`;
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
// GET a single users gear option 
router.get('/gear/:id', (req, res) => {
    const sql = `SELECT * FROM gear WHERE id = ?`;
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
// Delete users gear
router.delete('/gear/:id', (req, res) => {
    const sql = `DELETE FROM gear WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'User gear not found'
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
// Create a new user gear list -- fixed syntax errors but haven't tested the route in insomnia yet
router.post('/gear', ({ body }, res) => {
    const errors = inputCheck(body, 'clips', 'climbing_shoes', 'chalk', 'harness', 'dry_rope', 'helmet', 'locking_carabiners');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO gear (clips, climbing_shoes, chalk, harness, dry_rope, helmet, locking_carabiners)
    VALUES (?,?,?,?,?,?,?)`;
    const params = [body.clips, body.climbing_shoes, body.chalk, body.harness, body.dry_rope, body.helmet, body.locking_carabiners];

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