const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id:String,
  name: String,
  password: String,
  email: String,
  address: String,
  phone: String,
  credit_card_info: String,
  billing_info:String,
  //order_history:[orderSchema],
  order_history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
}, {collection: 'user'});
module.exports = userSchema;
