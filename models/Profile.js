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
            type: DataTypes.BIGINT,
        },
        user_experience: {
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
            type: DataTypes.STRING,
        },
<<<<<<< HEAD
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }
=======
        score: {
          type: DataTypes.INTEGER,
          allowNull: true
      }
>>>>>>> c8b8aa5daff8101796c1c0b561f08efbc91b5d2d
    },
    {
        sequelize,
        modelName: 'Profile'
    }
)

module.exports = Profile;