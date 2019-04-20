const mongoose = require('mongoose');
const orderSchema = require('../order/order.schema.server');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  address: String,
  phone: String,
  userType:{
    type: String,
    enum: ['Customer', 'Employee', 'Delivery','Admin']
  },
  order_history: [orderSchema],
}, {collection: 'user'});
module.exports = userSchema;
