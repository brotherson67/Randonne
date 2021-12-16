const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
//for mitch when working on login

    //set up method to run on instance data (per user) to check password
    // checkPassword(loginPw) {
    //     return bcyrpt.compareSync(loginPw, this.password);
    // }
}

//create user fields and columns 
User.init (
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8]
          }
        }
      },
      {
        //mitch this will be helpful for when you work on the login


        // hooks: {
        //   // set up beforeCreate lifecycle "hook" functionality
        //   async beforeCreate(newUserData) {
        //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //     return newUserData;
        //   },
    
        //   async beforeUpdate(updatedUserData) {
        //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //     return updatedUserData;
        //   }
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );
    
    module.exports = User;



