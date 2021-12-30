const router = require('express').Router();

const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const mapRoutes = require('./mapRoutes.js');
const findFriends = require('./findFiendsRoutes');

router.use('/profile', profileRoutes);
router.use('/users', userRoutes);
router.use('/map', mapRoutes);
router.use('/friends', findFriends);

module.exports = router;