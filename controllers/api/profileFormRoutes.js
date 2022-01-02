const router = require('express').Router();
const { Profile } = require('../../models');

// Get all Pros
router.get('/', (req, res) => {
  Profile.findAll()
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// // GET a single Profile profile
router.get('/:id', (req, res) => {
  Profile.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
    ,
    attributes: [
      'profile_image',
      'user_location',
      'user_phone',
      'user_experience',
      'has_gear',
      'social',
      'location'
    ],
  })
  .then(dbProfileData => {
    if (!dbProfileData) {
      res.status(404).json({ message: 'No Profile found with this id' });
      return;
    }
      // serialize the data
      // const profile = dbProfileData.get({ plain: true });
    res.json(dbProfileData);
    // pass data to template
    // res.render('profile', { profile });
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No Profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // Create a Pro
router.post('/', (req, res) => {
  // expects {Profname: 'Plaindemon', email: 'plain@demon.com', password: 'password0000'}
  Profile.create({
    profile_image: req.body.profile_image,
    user_id: req.body.user_id,
    user_location: req.body.user_location,
    user_phone: req.body.user_phone,
    user_experience: req.body.user_experience,
    has_gear: req.body.has_gear
  })
    .then(dbProfileData => {
      req.session.save(() => {
        req.session.Profile_id = dbProfileData.id;
        req.session.ProfileName = dbProfileData.username;
        req.session.Profile_location = dbProfileData.user_location;
        req.session.Profile_phone = dbProfileData.user_phone;
        req.session.Experience = dbProfileData.user_experience;
        req.session.Gear = dbProfileData.has_gear;

        req.session.loggedIn = true;
        console.log("POST - new profile", dbProfileData);
        res.json(dbProfileData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/profile', (req, res) => {
  // expects {email: 'plain@demon.com', password: 'password0000'}
  Profile.findOne({
    where: {
      id: req.body.id
    }
  }).then(dbProfileData => {
    if (!dbProfileData) {
      res.status(400).json({ message: 'No Profil with that email address!' });
      return;
    }

    req.session.save(() => {
<<<<<<< HEAD:controllers/api/profileFormRoutes.js
      req.session.Profile_id = dbProfileData.id;
      req.session.ProfileName = dbProfileData.Profilename;
=======
      req.session.profile_id = dbProfileData.id;
      req.session.profileName = dbProfileData.ProfileName;
      req.session.Profile_location = dbProfileData.user_location;
      req.session.Profile_phone = dbProfileData.user_phone;
      req.session.Experience = dbProfileData.user_experience;
      req.session.Gear = dbProfileData.has_gear;

>>>>>>> fe33b2e03a484d3850840473bc1a30586d8e8fe2:controllers/api/profileRoutes.js
      req.session.loggedIn = true;
  
      res.render('profile', { profile: dbProfileData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  // expects {Profname: 'Plaindemon', email: 'plain@demon.com', password: 'password0000'}

  // pass in req.body instead to only update what's passed through
  Profile.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No Profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Profile.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData) {
        res.status(404).json({ message: 'No Profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

