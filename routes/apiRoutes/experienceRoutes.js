const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');


// db.query(`SELECT * FROM experience`, (err, rows) => {
//     console.log(rows);
// });
// db.query(`SELECT * FROM experience WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });

module.exports = router;