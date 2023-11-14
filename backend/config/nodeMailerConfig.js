const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'singhhardy724@gmail.com',
    pass: 'wuyt qhzu tfxc zjmv',
  },
});

module.exports = transporter;
