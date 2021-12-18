const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class userProfile extends Model {}

userProfile.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        profile_image: {
            type: Datatypes.STRING,
            allowNull: true
        }
        has_gear: {
            
        }
    }
)