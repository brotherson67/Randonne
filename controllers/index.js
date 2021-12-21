const router = require('express').Router();

const homeRoutes = require('./home-routes')
const profilePage = require('./profile-page');
// const messageRoutes = require('./messageRoutes')

router.use('/', homeRoutes);

router.use('/profile-page', profilePage);

// router.use('/message', messageRoutes);

module.exports = router;