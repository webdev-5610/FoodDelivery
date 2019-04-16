var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema(
    {
        name: String,
        password: String,
        email: String,
        address: String,
        phone: String,
        description: String,
        dateCreate: {
            type: Date,
            default: Date.now()
        }

    }, {collection: "restaurant"}
);

module.exports = restaurantSchema;
