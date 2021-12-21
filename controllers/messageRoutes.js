const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/message', (req, res) => {
    res.send('<h2>Welcome</h2>');
  });