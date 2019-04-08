var mongoose = require('mongoose');

var websiteSchema = require('./restaurant.schema.server');
var websiteModel = mongoose.model("Website",websiteSchema);

var userModel = require('../user/user.model.server');

// websiteService at server side will call this function
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

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
}

function findAllWebsitesForUser(userId) {
    console.log('Mongoose: findAllWebsitesForUser() called');
    return websiteModel.find({_user: userId})
        .populate('_user', '_id');

}

function findWebsiteById(websiteId) {
    console.log('Mongoose: findWebsiteById() called: ');
    return websiteModel.findOne({_id: websiteId});
}

function updateWebsite(websiteId, website) {
    console.log('Mongoose: updateWebsite() called');
    return websiteModel.updateOne({_id: websiteId}, website);
}

function deleteWebsite(userId, websiteId) {
    console.log('Mongoose: deleteWebsite() called');
    // first, find the original restaurant
    websiteModel.findOne({_id: websiteId})
        .then(function (responseWebsite) {
            // next, for the current user, delete this restaurant from user's restaurant list.
            userModel.findUserById(userId)
                .then(function (user) {
                    user.websites.pull({ _id: responseWebsite._id });
                    return user.save();
                });
            return responseWebsite;
        });
    // then, delete this restaurant
    return websiteModel.deleteOne({_id: websiteId});


}

function findAllWebsites() {
    websiteModel.find(function (err, website) {
        console.log(website);
    })
}
