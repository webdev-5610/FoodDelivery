const mongoose = require('mongoose');

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
