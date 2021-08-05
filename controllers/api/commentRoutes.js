const router = require('express').Router();
const { Comment } = require('../../models');

//  /api/comments

router.get('/', async (req, res) => { 
    try {
        const commentData = await Comment.findAll();
        const comments = commentData.map(comment => comment.toJSON());
        // render to homepage
        res.status(200).render('homepage', { comments });
        } catch (err) {
        res.status(500).json(err);
        }
});

module.exports = router;