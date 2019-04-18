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

<<<<<<< HEAD
// websiteService at server side will call this function
//restaurantModel.findAllOrders = findAllOrders;
//restaurantModel.createRestaurant = createRestaurant;
//restaurantModel.findRestaurantByName = findRestaurantByName;
//restaurantModel.findRestaurantByCredentials = findRestaurantByCredentials;
//restaurantModel.findRestaurantByType = findRestaurantByType;
//restaurantModel.updateRestaurant = updateRestaurant;
//restaurantModel.deleteRestaurant = deleteRestaurant;

module.exports = restaurantModel;

// functions go here
function createWebsiteForUser(userId, website) {
    console.log('Mongoose: createWebsite() called');
    return websiteModel.create(website)
        .then(function (responseWebsite) {
            userModel.findUserById(userId)
                .then(function (user) {
                    user.websites.push(responseWebsite);
                    //console.log(user)
                    return user.save();
                });
            return responseWebsite;
        });
=======
function createDish(user) {
    return Restaurant.create(user);
>>>>>>> Lulin
}

function findDishById(userId) {
    return Restaurant.findById(userId);
}

function findDishByUsername(username) {
    return Restaurant.findOne({ username: username });
}

function findDishByCredentials(username, password) {
    return Restaurant.findOne({ username: username, password: password });
}

function updateDish(userId, user) {
    return Restaurant.findByIdAndUpdate(userId, user, {new: true});
}

function deleteDish(userId) {
    return Restaurant.findByIdAndRemove(userId);
}
