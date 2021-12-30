const seedUsers = require('./user-seeds');
const seedProfiles = require('./profile-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
<<<<<<< HEAD
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  // await seedProfiles();
  // console.log('--------------');

  process.exit(0);
};
=======
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
  
    await seedProfiles();
    console.log('--------------');
  
    process.exit(0);
  };
>>>>>>> 9d285f91e233fb6dad13f545b0820a58034e9ee9
  
seedAll();


