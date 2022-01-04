const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Profile  } = require('../models');

// get homepage 
router.get('/', (req, res) => {
  console.log(req.session);
  console.log('=========HOME PAGE=============');
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN
  })
    
});
// get single profile - working w handlebars
router.get('/profile', (req, res) => {
  let user = req.session.user_id
  console.log("GET",user)
  Profile.findOne({
    where: {
      id: user
    },
    attributes: [
      'profile_image',
      'user_location',
      'user_phone',
      'user_experience',
      'has_gear',
      'social',
      'location'
      // ,
      // [sequelize.literal('(SELECT (*) FROM user WHERE profile.id = user.profile_id)')]
    ],
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404)
          .render('./error')
          // .json({ message: 'No profile found with this id' });
        return;
      }

      const profile = dbProfileData.get({ plain: true });
         console.log('Profile', profile)
      res.render('profile', {
        profile,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      // res.status(500)
      res.render('./error')  
      .json(err);
    });
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.render('/');
  //   return;
  // }
  console.log('logged in?')
  res.render('./partials/login');
});
router.get('/logout', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.render('/homepage');
  //   return;
  // }
  console.log('logged in?')
  res.render('./partials/logout');
});

router.get('/map', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/map');
  //   return;
  // }
  console.log('Map location required')
  res.render('./map', {
    MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN
  });
});
router.get('/form', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/map');
  //   return;
  // }
  console.log('Find friends page')
  res.render('findFriends', {layout:'main2'});
});
router.get('/signup', (req, res) => {
  res.render('partials/signup');
  if (req.session.loggedIn) {
    res.render('/profile');
    return;
  }
});
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
  res.render('profile', {layout:'main2'});
});
router.get('/gear', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/gear');
  //   return;
  // }
  console.log('Gear Checklist page')
  res.render('./gear');
});
router.get('/copyright', (req, res) => {
  res.render('./copyright', {layout:'main2'});
});
router.get('/privacy', (req, res) => {
  res.render('./privacy', {layout: 'main2'});
});
router.get('/contact', (req, res) => {
  res.render('./contactUs', {layout: 'main2'});
});
router.get('/submission', async (req, res) => {
  // req.body.id find by pk (req.body.id)
  const profileData = await Profile.findByPk(req.session.user_id);
  console.log(profileData);
  const newProfile = profileData.get({ plain: true })
  console.log(newProfile);

  res.render('submissionForm', newProfile);
});
router.get('/all-profile', (req, res) => {

  Profile.findAll({

      include: [
          User
      ]
  })
      .then(dbProfileData => {
          const profs = dbProfileData.map(profs => profs.get({ plain: true }));

          res.render('all-profile', {
              profs
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});
router.get('/error', (req, res) => {
  res.render('./error')
})



module.exports = router;

