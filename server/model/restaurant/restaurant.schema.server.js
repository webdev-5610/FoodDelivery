
var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        address: String,
        phone: String,
        description: String,
        dateCreate: {
            type: Date,
            default: Date.now()
        },
        menu: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'menu'
        }],

    }, {collection: "restaurant"}
);

module.exports = restaurantSchema;
