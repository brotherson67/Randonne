const router = require('express').Router();

const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileFormRoutes');
// const messageRoutes = require('./messageRoutes.js');

router.use('/profile', profileRoutes);
router.use('/users', userRoutes);
// router.use('/message', messageRoutes);

module.exports = router;