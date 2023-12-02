const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
