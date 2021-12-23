const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        profile_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_location: {
            type: DataTypes.STRING,
        },
        user_phone: {
            type: DataTypes.INTEGER,
        },
        user_experience: {
            type: DataTypes.BOOLEAN,
        },
        user_setting: {
            type: DataTypes.BOOLEAN,
        },
        has_gear: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        social: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        location: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        modelName: 'Profile'
    }
)

module.exports = Profile;