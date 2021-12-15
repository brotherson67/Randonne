const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();



// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'blueSalamander',
      database: 'climbing'
    },
    console.log('Connected to the climbing database.')
  );


app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
});


// Get all users
app.get('/api/user', (req, res) => {
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


// GET a single user 
app.get('/api/user/:id', (req, res) => {
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
// Delete a user
app.delete('/api/user/:id', (req, res) => {
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

// create a new user
// const sql = `INSERT INTO user (id, user_name)
//             VALUES (?, ?)`;
// const params = [13, 'mermaid1'];

// db.query(sql, params, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
// });

// db.query(`SELECT * FROM experience`, (err, rows) => {
//     console.log(rows);
// });
// db.query(`SELECT * FROM experience WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });
// db.query(`SELECT * FROM gear`, (err, rows) => {
//     console.log(rows);
// });
// db.query(`SELECT * FROM gear WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });
// db.query(`SELECT * FROM social`, (err, rows) => {
//     console.log(rows);
// });
// db.query(`SELECT * FROM social WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });
// db.query(`SELECT * FROM work`, (err, rows) => {
//     console.log(rows);
// });

// db.query(`SELECT * FROM work WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });










// Default response for any other request (Not Found) // use as the last route because it will override the other routes
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });