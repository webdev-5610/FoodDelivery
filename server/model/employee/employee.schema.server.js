var mongoose = require('mongoose');

var emloyeeSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        email: String,
        firstname: String,
        lastname: String,
        phone: String,
        dateCreate: {
            type: Date,
            default: Date.now()
        }

    }, {collection: "employee"}
);

module.exports = emloyeeSchema;
