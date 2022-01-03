// const router = require('express').Router();
// const { Profile } = require('../models/');
// const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     try {
//       const profileData = await Profile.findAll({
//         where: {
//           userId: req.session.userId,
//         },
//       });
//   console.log('LOGGED IN');
//     //   const profiles = profileData.map((profile) => profile.get({ plain: true }));
  
//       res.render('submission', {
//         layout: 'main2',
//         // profiles,
//       });

//     } catch (err) {
//         console.log('not logged in');
//       res.redirect('login');
//     }
//   });

// router.get('/submission', withAuth, async (req, res) => {
//   try {
    
//     const profileData = await Profile.findByPk(req.session.userId)
//     console.log(profileData);
//     const newProfile = profileData.get({plain:true})
//     console.log(newProfile);
  
//     res.render('submissionForm', { layout:"main2", newProfile});
  

//   } catch (err) {
//     res.redirect('login');
//   }
// });


// module.exports = router;