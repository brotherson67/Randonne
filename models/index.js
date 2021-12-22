// import all models
const Gear = require('./Gear');
const User = require('./User');
// const Social = require('./Social');
// const Experience = require('./Experience');

// create associations
User.hasMany(Gear, {
    foreignKey: 'user_id'
  });





module.exports = { User, Gear, Social, Experience };