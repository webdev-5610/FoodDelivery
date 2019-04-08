var mongoose = require('mongoose');

var pageSchema = require('../page/page.schema.server');

var websiteSchema = mongoose.Schema(
  {
    _user: {type: mongoose.Schema.ObjectId, ref: "User"},
    name: String,
    description: String,
    pages: [pageSchema],
    dateCreate: {type: Date, default: Date.now()}

  },{collection: "website"}
);

module.exports = websiteSchema;
