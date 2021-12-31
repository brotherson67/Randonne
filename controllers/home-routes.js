const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Profile  } = require('../models');

// get all matches for homepage -- change to get matches 
router.get('/', (req, res) => {
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
      'username',
      'email'
    ],
    include: [
      {
        model: Profile,
        attributes: ['id'],
      },
    ]
  })
    .then(dbUserData => {
      const users = dbUserData.map(user => user.get({ plain: true }));

      res.render('homepage', {
        users,
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
      'location',
      [sequelize.literal('(SELECT (*) FROM user WHERE profile.id = user.profile_id)')]
    ],
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const profile = dbProfileData.get({ plain: true });

      res.render('./profile', {
        profile,
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
  console.log('logged in?')
  res.render('./partials/login');
});
<<<<<<< HEAD
=======

router.get('/sign-up', (req, res) => {
  // console.log('logged in?')
  res.render('./partials/signup');
  if (req.session.loggedIn) {
    res.render('/profile');
    return;
  }
});
router.get('/map', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/map');
  //   return;
  // }
  console.log('Map location required')
  res.render('./map');
});
router.get('/form', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/map');
  //   return;
  // }
  console.log('Find friends page')
  res.render('./findFriends');
});
// router.get('/signup', (req, res) => {
  
//   res.render('partials/signup');
// });

// router.get('/profile', (req, res) => {
//     res.render('profile', {layout: 'main2'});
// });


router.get('/profile/:id', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/profile');
  //   return;
  // }
  console.log('============================ Profile page change success =====================================')
  res.render('single-profile');
});

router.get('/gear', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/gear');
  //   return;
  // }
  console.log('Gear Checklist page')
  res.render('./gear', {layout: 'main2'});
});


>>>>>>> 28fd9da28b9fca2db033179a99b71495b856a4dd
module.exports = router;