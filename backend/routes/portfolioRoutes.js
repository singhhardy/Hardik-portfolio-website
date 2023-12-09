const express = require('express');
const { uploadPortfolio, getPortfolio, getPortfolioItem } = require('../controllers/portfolioController');
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

// Change the order of routes
router.get('/', getPortfolio)
router.get('/:id', getPortfolioItem)
router.post('/upload', upload.single('img'), uploadPortfolio);

module.exports = router;
