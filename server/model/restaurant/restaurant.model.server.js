var mongoose = require('mongoose');
var RestaurantSchema = require('./restaurant.schema.server.js');
var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

Restaurant.createDish = createDish;
Restaurant.findDishById = findDishById;
Restaurant.findDishByUsername = findDishByUsername;
Restaurant.findDishByCredentials = findDishByCredentials;
Restaurant.updateDish = updateDish;
Restaurant.deleteDish = deleteDish;

module.exports = Restaurant;

    function createDish(user) {
        return Restaurant.create(user);
    }

    function findDishById(userId) {
        return Restaurant.findById(userId);
    }

    function findDishByUsername(username) {
        return Restaurant.findOne({username: username});
    }

    function findDishByCredentials(username, password) {
        return Restaurant.findOne({username: username, password: password});
    }

    function updateDish(userId, user) {
        return Restaurant.findByIdAndUpdate(userId, user, {new: true});
    }

    function deleteDish(userId) {
        return Restaurant.findByIdAndRemove(userId);
    }

