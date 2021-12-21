const router = require('express').Router();
const sequelize = require('../config/connection');
const { userProfile } = require('../models');


router.get('/', (req, res) => {
    res.render('profile-page');
  });


  module.exports = router;