const router = require('express').Router();
const { Comment } = require('../../models');

//  /api/comments

router.get('/', async (req, res) => { 
    try {
        const commentData = await Comment.findAll();
        res.json(commentData);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;