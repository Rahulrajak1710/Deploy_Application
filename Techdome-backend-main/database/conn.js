const mongoose = require("mongoose");

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection to MongoDB established successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });