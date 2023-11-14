const express = require('express')
const router = express.Router()

const { recieveMail } = require('../controllers/mailController')

router.post('/', recieveMail)

module.exports = router