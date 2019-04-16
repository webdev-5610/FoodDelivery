var mongoose = require('mongoose');
var RestaurantSchema = require('./restaurant.schema.server.js');
var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

Restaurant.createEmployee = createEmployee;
Restaurant.findEmployeeById = findEmployeeById;
Restaurant.findEmployeeByUsername = findEmployeeByUsername;
Restaurant.findEmployeeByCredentials = findEmployeeByCredentials;
Restaurant.updateEmployee = updateEmployee;
Restaurant.deleteEmployee = deleteEmployee;

module.exports = Restaurant;

function createEmployee(user) {
    return Restaurant.create(user);
}

function findEmployeeById(userId) {
    return Restaurant.findById(userId);
}

function findEmployeeByUsername(username) {
    return Restaurant.findOne({ username: username });
}

function findEmployeeByCredentials(username, password) {
    return Restaurant.findOne({ username: username, password: password });
}

function updateEmployee(userId, user) {
    return Restaurant.findByIdAndUpdate(userId, user, {new: true});
}

function deleteEmployee(userId) {
    return Restaurant.findByIdAndRemove(userId);
}
