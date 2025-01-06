const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: [true, 'id is required'],  
        trim: true,  
    }
    ,
    name: {
        type: String,
        required: [true, 'Name is required'], 
        trim: true, 
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],  
        unique: true,  
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], 
    }
}, {
    timestamps: true 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
