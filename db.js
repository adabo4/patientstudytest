// db.js

const mongoose = require('mongoose');

// MongoDB connection URL 
const mongoURI = process.env.MONGODB_URI;

// MongoDB options
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Create a function to establish the MongoDB connection
const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI, mongoOptions);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToDatabase;