const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
// const messageRoutes = require('./messageRoutes');

router.use('/', homeRoutes);
// router.use('/message', messageRoutes);

module.exports = router;