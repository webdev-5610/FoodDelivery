var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    _details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details'
    },
    user: String,
    restaurant: String,
    status: Number,
    time: {type: Date, default: Date.now()}
}, {collection: 'order'});

module.exports = orderSchema;
