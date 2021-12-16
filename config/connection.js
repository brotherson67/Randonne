const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
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