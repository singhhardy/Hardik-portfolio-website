const express = require('express');
const { uploadPortfolio, getPortfolio } = require('../controllers/portfolioController');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/Images'));
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  

const upload = multer({
    storage
});
  
// Assuming 'img' is the name of the file input in the form
router.post('/upload', upload.single('img'), uploadPortfolio);
router.get('/', getPortfolio)

module.exports = router;
