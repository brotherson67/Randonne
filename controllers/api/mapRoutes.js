// BECAUSE THE MAP IS INSERTED THROUGHT THE home-routes PAGE, THIS FILE MAY BE DEPRECIATED

const router = require('express').Router();


router.get('/map', (req, res) => {
    res.render('./partials/map');

});

module.exports = router;