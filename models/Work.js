const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Work extends Model {}

//create social fields and columns 
Work.init (
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        schedule: {
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
        modelName: 'work'
      }
    );
    
    module.exports = Work;