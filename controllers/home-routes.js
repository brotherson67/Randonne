const router = require("./apiRoutes/gearRoutes");

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebars Docs',
        created_at: New Date(),
        user: {
            username: 'test_user'
        }
    });
});

