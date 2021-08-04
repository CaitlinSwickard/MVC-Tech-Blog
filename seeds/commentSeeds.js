const { Comment } = require('../models');

// creating comment data
const commentData = [
    {
        user_id: 1,
        blog_id: 1,
        comment: "I just learned this in class!"
    },
    {
        user_id: 2,
        blog_id: 2,
        comment: "This is so important!"
    },


]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;