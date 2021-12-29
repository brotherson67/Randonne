
const Sequelize = require('sequelize');
require('dotenv').config();
// Connect to database
// added env in order to avoid password and pport issues
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, 
    {
      host: 'localhost',
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

//  ///////////
module.exports = sequelize;