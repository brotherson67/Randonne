const router = require('express').Router();

const userRoutes = require('./userRoutes');

const profileRoutes = require('./profileFormRoutes');

router.use('/profile', profileRoutes);


router.use('/users', userRoutes);

module.exports = router;