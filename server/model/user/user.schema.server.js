const mongoose = require('mongoose');
<<<<<<< HEAD
var orderSchema = require('../order/order.schema.server');
=======

>>>>>>> Lulin
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
  order_history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
}, {collection: 'user'});
module.exports = userSchema;
