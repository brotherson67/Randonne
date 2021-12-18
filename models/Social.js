const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Social extends Model {}

//create social fields and columns 
Social.init (
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        climb_type: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'social'
      }
    );
    
    module.exports = Social;