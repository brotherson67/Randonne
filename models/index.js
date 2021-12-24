// import all models
const User = require('./User');
const Gear = require('./Gear');
const Social = require('./Social');
const Experience = require('./Experience');
const Work = require('./Work');
const Profile = require('./Profile');

// create associations
Gear.hasMany(User, {
    as: 'gear', 

});
// Gear.belongsTo(Social, {
//     as: 'gear'
// });

Experience.belongsTo(User, {
    // foreignKey: 'experience_id'
    as: 'experience'
});

Social.belongsTo(User, {
    as: 'social'
});

Work.belongsTo(User, {
    as: 'work'
});
Profile.belongsTo(User, {
    as: 'profile'
});




module.exports = { User, Gear, Social, Experience, Profile };