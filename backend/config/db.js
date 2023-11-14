const mongoose = require('mongoose')
const color = require('colors')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${conn.connection.host}` .cyan .underline)
    } catch(error){
        console.log(`Error: ${error.message}` .red .underline .bold)
    }
}

module.exports = connectDB