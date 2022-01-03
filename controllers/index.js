const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes= require('./dashboardRoutes');
// const messageRoutes = require('./messageRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
// router.use('/message', messageRoutes);

module.exports = router;