var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');
var pageSchema = new mongoose.Schema({
    _website: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website'
    },
    name: String,
    title: String,
    description: String,
    widgets: [widgetSchema],
    dateCreated: {type: Date, default: Date.now()}
}, {collection: 'order'});

module.exports = pageSchema;
