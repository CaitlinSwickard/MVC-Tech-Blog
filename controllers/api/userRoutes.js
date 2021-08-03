const router = require('express').Router();
const { User } = require('../../models');

//  /api/users

router.get('/', async (req, res) => { 
    try {
        const userData =await User.findAll();
        res.json(userData);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;