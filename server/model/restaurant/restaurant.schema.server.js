var mongoose = require('mongoose');

var orderSchema = require('../order/order.schema.server');

var websiteSchema = mongoose.Schema(
  {
    _user: {type: mongoose.Schema.ObjectId, ref: "User"},
    name: String,
    description: String,
    pages: [orderSchema],
    dateCreate: {type: Date, default: Date.now()}

  },{collection: "restaurant"}
);

module.exports = websiteSchema;
