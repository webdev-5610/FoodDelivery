var mongoose = require('mongoose');

var menuSchema = mongoose.Schema({
    dish_name: String,
    price: Number,
    description: String,
    url: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    position: Number
}, { collection: 'menu' });

module.exports = menuSchema;
