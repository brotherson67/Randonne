const router = require('./apiRoutes/userRoutes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

