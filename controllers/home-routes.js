const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Profile  } = require('../models');

// get all matches for homepage -- change to get matches 
router.get('/', (req, res) => {
  console.log(req.session);
<<<<<<< HEAD
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
=======
  console.log('=========HOME PAGE=============');
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  })
    
});


// get single profile - working w handlebars
router.get('/profile', (req, res) => {
  let user = req.session.user_id
  console.log("GET", user)
  Profile.findOne({
    where: {
      id: req.session.id
>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2
    },
    attributes: [
      'profile_image',
      'user_location',
      'user_phone',
      'user_experience',
      'has_gear',
      'social',
<<<<<<< HEAD
      'location',
      [sequelize.literal('(SELECT (*) FROM user WHERE profile.id = user.profile_id)')]
=======
      'location'
>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2
    ],
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
<<<<<<< HEAD
        res.status(404).json({ message: 'No post found with this id' });
=======
        res.status(404).json({ message: 'No profile found with this id' });
>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2
        return;
      }

      const profile = dbProfileData.get({ plain: true });
<<<<<<< HEAD

=======
         console.log('Profile', profile);
>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2
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
<<<<<<< HEAD
=======
// router.get('/profile', (req, res) => {
=======

// putting second profile route for getting all profiles -- not working
// router.get('/profile-all', (req, res) => {
>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2
//   let user = req.session.user_id
//   console.log("GET", user)
//   Profile.findAll({
//     where: {
//       id: req.session.id
//     },
//     attributes: [
//       'profile_image',
//       'user_location',
//       'user_phone',
//       'user_experience',
//       'has_gear',
//       'social',
//       'location'
//     ],
//   })
//     .then(dbProfileData => {
//       if (!dbProfileData) {
//         res.status(404).json({ message: 'No profile found with this id' });
//         return;
//       }

//       const profile = dbProfileData.get({ plain: true });
//          console.log('Profile', profile);
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
<<<<<<< HEAD
=======
router.get('/signup', (req, res) => {
  
  res.render('partials/signup');
});
>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2

router.get('/profile', (req, res) => {
    res.render('./profile');
    // res.render('profile', {layout: 'main2'});
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
  res.render('./gear');
});


module.exports = router;