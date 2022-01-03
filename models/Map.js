const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Map extends Model {}

Map.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.INTEGER,
            references: {
                model: 'profile',
                key: 'location'
            }
        }
    },
    {
        sequelize,
        modelName: 'Map'
    }
)

module.exports = Map;