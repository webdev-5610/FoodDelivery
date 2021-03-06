var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    dishes: [{
        dish: String,
        price: Number,
        quantity: Number,
    }],
    total:Number,
    user: String,
    userId: String,
    deliverId: String,
    status: Number,
    userAddress: String,
    phone:String,
    time: {type: Date, default: Date.now()}
}, {collection: 'order'});

module.exports = orderSchema;
