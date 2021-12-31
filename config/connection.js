require('dotenv').config();
const mysql = require('mysql2');
const Sequelize = require('sequelize');

// Connect to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
  }
);

module.exports = sequelize;