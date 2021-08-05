const router = require('express').Router();
const { User } = require('../../models');

//  /api/users

// router.get('/', async (req, res) => { 
//     try {
//         const userData = await User.findAll();
//         const users = userData.map(user => user.toJSON());
//         // render to homepage
//         res.status(200).render('homepage', { users });
//         } catch (err) {
//         res.status(500).json(err);
//         }
// });

module.exports = router;

