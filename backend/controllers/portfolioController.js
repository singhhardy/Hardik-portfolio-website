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

// const getPortfolio = async (req, res) => {

//     try{
//         const portfolioItems = await Portfolio.find();
//         res.json({success: true, portfolio: portfolioItems})
//     } catch(error){
//         console.log(error)
//         res.status(500).json({success: false, message: 'Internet Server Error'})
//     }
// }

const getPortfolio = async (req, res) => {
  try {
    // Check database connection
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Database connection not established');
    }
    const portfolioItems = await Portfolio.find().limit(6);

    res.json({ success: true, portfolio: portfolioItems });
  } catch (error) {
    console.error(error);

    // Improve error handling with more details
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};



module.exports = { 
    uploadPortfolio,
    getPortfolio
 };
