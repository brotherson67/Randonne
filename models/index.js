// import all models
const User = require('./User');
const Gear = require('./Gear');

const Social = require('./Social');
const Experience = require('./Experience');
const Work = require('./Work');
const userProfile = require('./userProfile');
// create associations
User.hasMany(Gear, {
    foreignKey: 'user_id'
});

User.hasMany(Experience, {
    foreignKey: 'experience_id'
})

User.hasMany(Social, {
    foreignKey: 'social_id'
})

User.hasMany(Work, {
    foreignKey: 'work_id'
})
User.belongsTo(userProfile, {
    foreignKey: 'user_id'
})




module.exports = { User, Gear, Social, Experience };