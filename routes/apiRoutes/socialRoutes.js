const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all social
router.get('/social', (req, res) => {
    const sql = `SELECT * FROM social`;
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
// GET a single social 
router.get('/social/:id', (req, res) => {
    const sql = `SELECT * FROM social WHERE id = ?`;
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
// // Delete a social -- in insomnia
router.delete('/social/:id', (req, res) => {
    const sql = `DELETE FROM social WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Socials not found'
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
// Create a social -- use insomnia to post the data currently
router.post('/social', ({ body }, res) => {
    const errors = inputCheck(body, 'social_level', 'description');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO social (social_level, description)
    VALUES (?,?,?)`;
    const params = [body.id, body.social_level, body.description];

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