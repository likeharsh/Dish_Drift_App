const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://likeharsh:PPzWcgbToEG8mgXo@cluster0.veajf.mongodb.net/dishdriftmern?retryWrites=true&w=majority&connectTimeoutMS=10000&serverSelectionTimeoutMS=10000';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected to MongoDB');

        // Fetching collection and data asynchronously
        const fetchedData = await mongoose.connection.db.collection("food_items");
        fetchedData.find({}).toArray(async function(err, data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(async function(err, catData){
                if (err) console.log(err);
                else {
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
            // global.food_items = data;
        
        })

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = mongoDB;