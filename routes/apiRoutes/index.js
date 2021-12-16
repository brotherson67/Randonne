const express = require('express');
const router = express.Router();

router.use(require('./userRoutes'));
router.use(require('./workRoutes'));
router.use(require('./socialRoutes'));
router.use(require('./gearRoutes'));
// router.use(require('./experienceRoutes'));

module.exports = router;