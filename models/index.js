// import all models
const User = require('./User');
const Gear = require('./Gear');
const Social = require('./Social');
const Experience = require('./Experience');
const Work = require('./Work');
const Profile = require('./Profile');

// create associations
User.hasMany(Gear, {
    // foreignKey: 'user_id'
});

User.hasMany(Experience, {
    // foreignKey: 'experience_id'
});

User.hasMany(Social, {
    // foreignKey: 'social'
});

User.hasMany(Work, {
    // foreignKey: 'work'
});
Profile.belongsTo(User, {});




module.exports = { User, Gear, Social, Experience, Profile };