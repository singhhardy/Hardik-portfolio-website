const mongoose = require('mongoose')

const blogsSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Blogs', blogsSchema)