const router = require('express').Router();
const sequelize = require('../config/connection');
const { Social, Gear, User, Profile  } = require('../models');

// get all matches for homepage -- change to get matches 
router.get('/', (req, res) => {
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
      'username',
      'email'
    ]
    ,
    include: [
      {
        model: Profile,
        attributes: ['id'],
      },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single profile
router.get('/profile/:id', (req, res) => {
  Profile.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'profile_image',
      'user_location',
      'user_phone',
      'user_experience',
      'has_gear',
      'social',
      'location'
      [sequelize.literal('(SELECT (*) FROM user WHERE profile.id = user.profile_id)')]
    ],
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('profile', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
module.exports = router;