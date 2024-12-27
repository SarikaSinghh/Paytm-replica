const mongoose = require('mongoose');

// Connect to the Database
try {
    const startTime = new Date().getTime();
    // Remove deprecated options
    mongoose.connect("mongodb://localhost:27017/PayTm-Clone").then(() => {
        const endTime = new Date().getTime();
        console.log("Connected to MongoDB locally");
        console.log("It took " + (endTime - startTime).toString() + " ms to connect to the Database.");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
} catch (err) {
    console.log(err);
}