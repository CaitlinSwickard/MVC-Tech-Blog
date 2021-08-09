const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//  /api/comments

// get all comments
router.get('/', async (req, res) => { 
    try {
        const commentData = await Comment.findAll();
        const comments = commentData.map(comment => comment.toJSON());
        // render to 
        res.status(200).render('/', { comments });
        console.log(comment)
        } catch (err) {
        res.status(500).json(err);
        }
});

router.post('/', withAuth, async (req, res) => {
  console.log("YOU HIT /api/post");
  console.log("REQ.BODY IS=", req.body);
    try {
      const newComment = await Comment.create({
      
        ...req.body,
        comment: req.body.comment,
        blog_id: req.body.blog_id,
        user_id: req.session.user_id,
        
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;