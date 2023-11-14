const express = require('express')
const asyncHandler = require('express-async-handler')

// @desc Create Blogs
// @route /api/blogs
// @access Private

const createBlog = asyncHandler( async(req,res) => {
    res.send('Create a Blog Here')
})

// @desc Get All Blogs
// @route /api/blogs
// @access Private

const getBlogs = asyncHandler( async(req,res) => {
    res.send('Get All Blogs Here')
})

// @desc Get Single Blogs
// @route /api/blogs
// @access Private

const getBlog = asyncHandler( async(req,res) => {
    res.send('Get a Blog Here')
})

// @desc Delete Blogs
// @route /api/blogs
// @access Private

const deleteBlog = asyncHandler( async(req,res) => {
    res.send('Get a Blog Here')
})

// @desc Update Blogs
// @route /api/blogs
// @access Private

const updateBlog = asyncHandler( async(req,res) => {
    res.send('Get a Blog Here')
})

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}
