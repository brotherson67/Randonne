// const Gear = require('./Gear');
// const Experience = require('./Experience');
// const Social = require('./Social');
// const Work = require('./Work');
const Profile = require('./Profile');
const User = require('./User');

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {
    // Gear,
    // Experience,
    // Social,
    // Work,
    Profile,
    User,
};
