const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
var bcrypt = require("bcrypt-nodejs");
const userModel = mongoose.model('User', userSchema);

// userService at server side will call this function
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByFacebookId = findUserByFacebookId;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;

// functions go here
function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
    console.log('Mongoose: findUserById() called: ');
  return userModel.findById(userId);
}
function findUserByFacebookId(facebookId) {
    console.log('Mongoose: findUserByFBId() called: ' + facebookId);
    return userModel.findOne({'facebook.id': facebookId});
}
function findUserByUsername(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});

}

function updateUser(userId, user) {
  return userModel.updateOne({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.deleteOne({_id: userId}, function (err) {
        if (err) {
          return handleError(err);
        } else {
          return null;
        }
      }
  );

}


