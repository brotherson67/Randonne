require('dotenv').config();
const mysql = require('mysql2');
const Sequelize = require('sequelize');
// Connect to database
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


module.exports = sequelize;