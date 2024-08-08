const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
}


module.exports = connectDB;