const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Profile  } = require('../models');

// get all matches for homepage -- change to get matches 
router.get('/', (req, res) => {
  console.log(req.session);
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
<<<<<<< HEAD
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

      res.render('profile', {
        profile,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
=======
// router.get('/profile', (req, res) => {
//   let user = req.session.user_id
//   console.log("GET",user)
//   Profile.findOne({
//     where: {
//       id: user
//     },
//     attributes: [
//       'profile_image',
//       'user_location',
//       'user_phone',
//       'user_experience',
//       'has_gear',
//       'social',
//       'location'
//       // ,
//       // [sequelize.literal('(SELECT (*) FROM user WHERE profile.id = user.profile_id)')]
//     ],
//   })
//     .then(dbProfileData => {
//       if (!dbProfileData) {
//         res.status(404).json({ message: 'No profile found with this id' });
//         return;
//       }

//       const profile = dbProfileData.get({ plain: true });
//          console.log('Profile', profile)
//       res.render('profile', {
//         profile,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
>>>>>>> 2e467a64701d1ca62ecc512d60980b53ae250596

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.render('/profile');
    return;
  }
  console.log('logged in?')
  res.render('./partials/login');
});

router.get('/sign-up', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  console.log('logged in?')
  res.render('./partials/signup');
      res.redirect('/friends');
    return;

});
router.get('/map', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/map');
  //   return;
  // }
  console.log('Map location required')
  res.render('partials/map');
});
router.get('/friends', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/map');
  //   return;
  // }
  console.log('Find friends page')
  res.render('findFriends', {layout:'main2'});
});

router.get('/profile', (req, res) => {
    res.render('profile', {layout: 'main2'});
});


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


module.exports = router;