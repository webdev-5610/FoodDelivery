const mongoose = require('mongoose');
var orderSchema = require('../server/model/order/order.schema.server');
const userSchema = new mongoose.Schema({
  _id:String,
  name: String,
  password: String,
  email: String,
  address: String,
  phone: String,
  credit_card_info: String,
  billing_info:String,
  order_history:[orderSchema]
  // facebook identity of the user
  /*facebook: {
    id: String,
    token: String
  }*/
}, {collection: 'user'});
module.exports = userSchema;
