const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
//var bcrypt = require("bcrypt-nodejs");
const userModel = mongoose.model('userModel', userSchema);

// userService at server side will call this function
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
<<<<<<< HEAD
//userModel.findAllOrders = findAllOrders;
=======
>>>>>>> Lulin

module.exports = userModel;

// functions go here
function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({ username: username });
}

function findUserByCredentials(username, password) {
    return userModel.findOne({ username: username, password: password });
}

function updateUser(userId, user) {
    return userModel.findByIdAndUpdate(userId, user, {new: true});
}

function deleteUser(userId) {
    return userModel.findByIdAndRemove(userId);
}


