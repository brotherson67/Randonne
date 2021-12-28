const mysql = require('mysql2');
const Sequelize = require('sequelize');
// Connect to database
const sequelize = new Sequelize('climbing_db', 'root', 'bridgetcodes', 
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3001,
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'blueSalamander',
      database: 'climbing_db'
    },
    console.log('Connected to the climbing database.')
  );

//  
module.exports = sequelize;