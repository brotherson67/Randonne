const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Experience extends Model {}

//create user fields and columns 
Experience.init (
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        climb_type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        rock_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        climb_level: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'experience'
      }
    );
    
    module.exports = Experience;
