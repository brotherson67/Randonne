const Profile = require('./Profile');
const User = require('./User');
// const Map = require('./Map');

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

// Map.belongsTo(User, {
//     foreignKey: 'user_id'
// });

module.exports = {
    Profile,
    User,
    // Map
};