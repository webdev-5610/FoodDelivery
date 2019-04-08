var mongoose = require('mongoose');
var widgetSchema = new mongoose.Schema({
  _page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page'
  },
  type: {
    type: String,
    enum : ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']
  },
  name: String,
  text: String,
  placeHolder: String,
  title: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'widget'});

module.exports = widgetSchema;






