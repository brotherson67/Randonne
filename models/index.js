const Profile = require('./Profile');
const User = require('./User');

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {
    Profile,
    User,
};
