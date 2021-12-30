const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('./findFriends')
});

module.exports = router;