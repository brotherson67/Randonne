const Sequelize = require('sequelize');
const mysql = require('mysql2')
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
  }
);

module.exports = sequelize;