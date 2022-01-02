const router = require('express').Router();


router.get('/copyright', (req, res) => {
    res.render('.partials/copyright');

});

module.exports = router;