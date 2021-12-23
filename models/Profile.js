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
        }
        ,
        profile_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
              }
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
        has_gear: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
      }
)

module.exports = Profile;