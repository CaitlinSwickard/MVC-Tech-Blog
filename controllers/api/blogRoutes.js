const router = require('express').Router();
const { Blog } = require('../../models');

//  /api/blogs

router.get('/', async (req, res) => { 
    try {
        const blogData =await Blog.findAll();
        res.json(blogData);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;