const router = require('express').Router();
const { Profile } = require('../../models');

// Get all Pros
router.get('/profile', (req, res) => {
  Profile.findAll({
    where: {
      id: req.params.id
    },
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// // GET a single Profile profile
router.get('/profile/:id', (req, res) => {
  Profile.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
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
router.post('/profile', (req, res) => {
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
      res.status(400).json({ message: 'No Profile with that email address!' });
      return;
    }

    const validPassword = dbProfileData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.Profile_id = dbProfileData.id;
      req.session.Profilename = dbProfileData.Profilename;
      req.session.loggedIn = true;
  
      res.json({ Profile: dbProfileData, message: 'You are now logged in!' });
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

