const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser'); 
const connectDB = require('./config/db');
const cors = require('cors')
const multer = require('multer')
const path = require('path')

connectDB()

const app = express()

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(cors())

app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended : false }))


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/portfolio', require('./routes/portfolioRoutes'))
app.use('/api/blogs', require('./routes/blogsroutes'))
app.use('/api/send-email', require('./routes/emailRoutes'))

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.status(200).json({message: 'Welcome to My Website'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use('/', (req, res) => {
    res.send('Welcome to my app')
})


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})