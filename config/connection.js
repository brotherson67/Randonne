require('dotenv').config();
const mysql = require('mysql2');
const Sequelize = require('sequelize');
// Connect to database
<<<<<<< HEAD
const sequelize = new Sequelize(
  'climbing_db',
  'root',
  'SQLPassword97',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

=======
const sequelize = new Sequelize('climbing_db', 'root', 'bridgetcodes', 
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
      // Your MySQL username,
      // user: 'root',
      // // Your MySQL password
      // password: 'blueSalamander',
      // database: 
    },
    console.log('Connected to the climbing database.')
  );
>>>>>>> ad38202554fcb35e0fca6e1c6e88d058fa79a749

module.exports = sequelize;