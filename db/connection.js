const mysql = require('mysql2');

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

//  
module.exports = db;