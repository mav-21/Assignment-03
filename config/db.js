// importing mongoose so we can connect to mongodb
const mongoose = require('mongoose');

// function to connect to the database
const connectDB = async () => {
    try {
        // connecting using the connection string from .env
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected successfully 👍");
    } catch (err) {
        console.log("MongoDB connection failed ❌", err);
        process.exit(1); // stop app if db is not connected
    }
};

module.exports = connectDB; // exporting so app.js can use this
