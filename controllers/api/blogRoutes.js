const router = require('express').Router();
const { Blog } = require('../../models');

//  /api/blogs

router.get('/', async (req, res) => { 
    try {
        const blogData =await Blog.findAll();
        const blogs= blogData.map(blog => blog.toJSON());
        // render to homepage
        res.status(200).render('homepage', { blogs });
        } catch (err) {
        res.status(500).json(err);
        }
});

module.exports = router;