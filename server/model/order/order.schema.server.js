var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    _details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details'
    },
    user: String,
    deliver: String,
    status: Number,
    userAddress: String,
    time: {type: Date, default: Date.now()}
}, {collection: 'order'});

module.exports = orderSchema;
