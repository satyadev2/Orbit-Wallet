const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, 'Status is required'],
        trim: true,  
}
    ,status: {
        type: String,
        required: [true, 'Status is required'],
        enum: ['success', 'pending', 'failed'],  
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        enum: ['debit', 'credit'],  
    },
    transactionDate: {
        type: Date,
        required: [true, 'Transaction date is required'], 
        default: Date.now,  
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],  
        min: [0, 'Amount must be a positive value'],  
    },
    userId: {
        type: "String",
        ref: 'User', 
        required: [true, 'User ID is required'],  
    }
}, {
    timestamps: true  
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
