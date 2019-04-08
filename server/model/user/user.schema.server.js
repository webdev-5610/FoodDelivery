const mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');
const userSchema = new mongoose.Schema({

  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,

  websites: [websiteSchema],
  dateCreated: {type: Date, default: Date.now()},
  // facebook identity of the user
  facebook: {
    id: String,
    token: String
  }
}, {collection: 'user'});
module.exports = userSchema;
