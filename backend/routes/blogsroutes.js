const express = require('express');
const router = express.Router();

const { createBlog, getBlogs } = require('../controllers/blogsController');

router.post('/', createBlog).get('/', getBlogs);

module.exports = router;
