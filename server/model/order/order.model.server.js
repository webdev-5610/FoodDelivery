var mongoose = require('mongoose');
var userModel = require('server/model/user/user.model.server');
var orderSchema = require('./order.schema.server');
var orderModel = mongoose.model("order",orderSchema);
var restaurantModel = require("../restaurant/restaurant.model.server");


orderModel.findAllOrdersByUser = findAllOrdersByUser;
orderModel.findOrderById = findOrderById;
orderModel.updateOrder = updateOrder;// also check status if finished or not.
orderModel.deleteOrder = deleteOrder;
orderMedel.createOrder = createOrder;
orderModel.findAllOrdersByRestaurant = findAllOrdersByRestaurant;

module.exports = orderModel;

function createOrder(orderId,order) {
    console.log('Mongoose: createOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.create(order)
        .then(function (responseOrder) {
            // next, for the current restaurant/user, push this order into restaurant's order list.
            userModel.findUserById(userId)
                .then(function (user) {
                    user.order_history.push(responseOrder);
                    return user.save();
                });
            return responseOrder;
        }).then(function (responseOrder) {
            // next, for the current restaurant/user, push this order into restaurant's order list.
            restaurantModel.findRestaurantById(restaurantId)
                .then(function (restaurant) {
                    restaurant.oders.push(responseOrder);
                    return user.save();
                });
            return responseOrder;
        });
}

function findAllOrdersByUser(userId) {
    console.log('Mongoose: findAllOrdersByUser called');
    return orderModel.find({_user: userId})
        .populate('_user', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findAllOrdersByRestaurant(restaurantId) {
    console.log('Mongoose: findAllOrdersByrestaurant called');
    return orderModel.find({_user: userId})
        .populate('_restaurant', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findPageById(pageId) {
    console.log('Mongoose: findPageById() called: ' + pageId);
    return pageModel.findOne({_id: pageId});
}

function updatePage(pageId, page) {
    console.log('Mongoose: updatePage() called');
    return pageModel.updateOne({_id: pageId}, page);
}

function deletePage(websiteId, pageId) {
    console.log('Mongoose: deletePage() called');
    // first, find the original order
    pageModel.findOne({_id: pageId})
        .then(function (responsePage) {
            // next, for the current restaurant, delete this order from restaurant's order list.
            websiteModel.findWebsiteById(websiteId)
                .then(function (website) {
                    website.pages.pull({ _id: responsePage._id });
                    return website.save();
                });
            return responsePage;
        });
    // then, delete this order
    return pageModel.deleteOne({_id: pageId});


}
