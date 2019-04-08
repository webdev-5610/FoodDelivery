var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    _details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website'
    },
    name: String,
    title: String,
    description: String,
    widgets: [widgetSchema],
    dateCreated: {type: Date, default: Date.now()}
}, {collection: 'order'});

module.exports = orderSchema;
