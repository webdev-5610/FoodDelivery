var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    details: {
        dish: [String],
        quantity: [Number],
        total: Number
    },
    user: String,
    userId: String,
    deliverId: String,
    status: Number,
    userAddress: String,
    time: {type: Date, default: Date.now()}
}, {collection: 'order'});

module.exports = orderSchema;
