const mongoose = require('mongoose')
require('dotenv').config()
const DatabaseConnect = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Data Base Connect...")
    } catch (error) {
        console.log("Database Connect error")
    }
}

module.exports = DatabaseConnect