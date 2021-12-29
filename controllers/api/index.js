const router = require('express').Router();

const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileFormRoutes');
const mapRoutes = require('./mapRoutes.js');

router.use('/profile', profileRoutes);
router.use('/users', userRoutes);
router.use('/map', mapRoutes);

module.exports = router;