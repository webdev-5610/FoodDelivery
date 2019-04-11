var mongoose = require('mongoose');
var adminSchema = require('./admin.schema.server');
var adminModel = mongoose.model('Admin', adminSchema);
var userModel = require('../user/user.model.server');
var restaurantModel = require('../restaurant/restaurant.model.server');

adminModel.createUser = createUser;
adminModel.findUserByCredentials = findUserByCredentials;
adminModel.findUserById = findUserById;
adminModel.findUserByFacebookId = findUserByFacebookId;
adminModel.findAllUsers = findAllUsers;
adminModel.findAllRestaurants = findAllRestaurants;
adminModel.deleteUserById = deleteUserById;
adminModel.deleteRestaurantById = deleteRestaurantById;

module.exports = adminModel;

//functions gp here
function findUserByFacebookId(facebookId) {
    return adminModel.findOne({'facebook.id': facebookId});
}

function createUser(user){
    return adminModel.create(user);
}

function findUserByCredentials(username, password){
    return adminModel.findOne({username: username});
}

function findUserById(userId){
    return adminModel.findOne({_id: userId});
}

function findAllUsers() {
    return userModel.find();
}

function findAllRestaurants() {
    return restaurantModel.find();
}

function deleteUserById(userId) {
    return userModel.findOneAndDelete({_id: userId});
}

function deleteRestaurantById(restaurantId) {
    return restaurantModel.findOneAndDelete({_id: restaurantId});
}