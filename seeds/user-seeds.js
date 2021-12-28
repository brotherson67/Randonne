const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

const userdata = [
  {
    username: 'plaindemon',
    email: 'plain@demon.com',
    password: 'demonplain1'
  },
  {
    username: 'blueshark',
    email: 'blue@shark.com',
    password: 'sharkblue1'
  },
  {
    username: 'greenberry',
    email: 'green@berry.com',
    password: 'berrygreen1'
  },
  {
    username: '1000_Autumns',
    email: '1000@autumns.com',
    password: 'autumns1000'
  },
  {
    username: 'petalday',
    email: 'petal@day.com',
    password: 'daypetal1'
  },
  {
    username: 'crispy_shots',
    email: 'crispy@shots.com',
    password: 'shotscrispy1'
  },
  {
    username: 'climbing_rocks',
    email: 'climbing@rocks.com',
    password: 'rocksclimbing1'
  },
  {
    username: 'climber1',
    email: 'climber@1.com',
    password: '1climb'
  },
  {
    username: 'holdup',
    email: 'hold@up.com',
    password: 'uphold1'
  },
  {
    username: 'lock_gear',
    email: 'lock@gear.com',
    password: 'gearlock1'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
