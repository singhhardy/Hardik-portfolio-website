const multer = require('multer');
const path = require('path');
const Portfolio = require('../modals/portfolioModal');

const uploadPortfolio = async (req, res) => {
  try {
    const { title, description, url } = req.body;

    // Assuming 'img' is the name of the file input in the form
    const img = req.file ? `Images/${req.file.filename}` : '';

    const portfolio = new Portfolio({ title, description, img, url });
    await portfolio.save();

    res.json({ success: true, message: 'Portfolio uploaded successfully', portfolio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};

// Get all portfolio items

const getPortfolio = async (req, res) => {

    try{
        const portfolioItems = await Portfolio.find();
        res.json({success: true, portfolio: portfolioItems})
    } catch(error){
        console.log(error)
        res.status(500).json({success: false, message: 'Internet Server Error'})
    }
}

module.exports = { 
    uploadPortfolio,
    getPortfolio
 };
