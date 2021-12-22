const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const workRoutes = require('./workRoutes');
const socialRoutes = require('./socialRoutes.js');
const gearRoutes = require('./gearRoutes.js');
const experienceRoutes = require('./experienceRoutes.js');
const messageRoutes = require('./messageRoutes.js');


router.use('/users', userRoutes);
router.use('/work', workRoutes);
router.use('/social', socialRoutes);
router.use('/gear', gearRoutes);
router.use('/experience', experienceRoutes);
// router.use('/message', messageRoutes);

module.exports = router;