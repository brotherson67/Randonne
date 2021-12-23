// import all models
const User = require('./User');
const Gear = require('./Gear');
const Social = require('./Social');
const Experience = require('./Experience');
const Work = require('./Work');
const Profile = require('./Profile');

// create associations
Gear.belongsTo(User, {
    as: 'gear', 
    
});
// Gear.belongsTo(Social, {});

Experience.belongsTo(User, {
    // foreignKey: 'experience_id'
});

Social.belongsTo(User, {
    // foreignKey: 'social'
});

Work.belongsTo(User, {});
Profile.belongsTo(User, {});




module.exports = { User, Gear, Social, Experience, Profile };