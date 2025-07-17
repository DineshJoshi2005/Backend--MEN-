const mongoose = require("mongoose");

//Now creating the Schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

// Now Creating the model using Schema.
const userModel = mongoose.model('user',userSchema);

module.exports = userModel;