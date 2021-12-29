const router = require('express').Router();


router.get('/', (req, res) => {
    // console.log('./partials/map')
    res.render('./partials/map');
});

module.exports = router;