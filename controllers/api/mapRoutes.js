const router = require('express').Router();


router.get('/map', (req, res) => {
    res.render('./partials/map');

});

module.exports = router;