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
        },
        user_name: {
            type: Datatypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'name'
              }
        },
        user_email: {
            type: Datatypes.STRING,
            references: {
                model: 'user',
                key: 'email'
            }
        },
        user_location: {
            type: Datatypes.STRING,
        },
        user_phone: {
            type: Datatypes.INTEGER,
        },
        user_experience: {
            //ask what datatype this is linked with typescript
            type: Datatypes.BOOLEAN,
        },
        has_gear: {
            type: Datatypes.BOOLEAN,
            allowNull: true,
        }
    }
)