const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://likeharsh:PPzWcgbToEG8mgXo@cluster0.veajf.mongodb.net/dishdriftmern?retryWrites=true&w=majority&connectTimeoutMS=10000&serverSelectionTimeoutMS=10000';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected to MongoDB');

        // Fetching collection and data asynchronously
        const fetchedData = mongoose.connection.db.collection("food_items");
        const data = await fetchedData.find({}).toArray();

        if (data.length === 0) {
            console.log("No documents found in 'food_items' collection.");
        } else {
            global.food_items = data;
            
        }

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = mongoDB;