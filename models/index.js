const Profile = require('./Profile');
const User = require('./User');

User.hasOne(Profile, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = {
    Profile,
    User,
};
