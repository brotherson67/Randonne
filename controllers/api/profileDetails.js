const router = require('express').Router();
const { userProfile } = require('../../models');
const express = require('express');
const db = require('../../config/connection');
const inputCheck = require('../../utils/inputCheck');


router.get('/profile', (req, res) => {
    const sql = `SELECT * FROM profile`;
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
// // GET a single profile 
router.get('/profile/:id', (req, res) => {
    const sql = `SELECT * FROM profile WHERE id = ?`;
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

router.delete('/profile/:id', (req, res) => {
    const sql = `DELETE FROM profile WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'profile not found'
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
// // Create a profile
router.post('/profile', ({ body }, res) => {
    const errors = inputCheck(body, 'profile_name');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `INSERT INTO profile (profile_name)
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

