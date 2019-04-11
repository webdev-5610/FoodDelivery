var mongoose = require("mongoose");

var AdminSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName:String,
    lastName: String,
    email: String,
    facebook: {
        id: String,
        token: String
    }
}, {collection:'Admin'});

module.exports = AdminSchema;
