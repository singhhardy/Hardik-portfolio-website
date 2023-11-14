const express = require('express')
const asyncHandler = require('express-async-handler')
const transporter = require('../config/nodeMailerConfig'); // Update the path to your transporter file

// @desc Create Blogs
// @route /api/blogs
// @access Private

const recieveMail = asyncHandler( async(req,res) => {   
    const { name, email, message } = req.body;

    // Create an email message without a "from" address
    const mailOptions = {
      to: 'singhhardy724@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Email not sent' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
})

module.exports = {
    recieveMail
}