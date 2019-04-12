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
orderModel.finishOrder = finishOrder;

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
        });
}

function findAllOrdersByUser(userId) {
    console.log('Mongoose: findAllOrdersByUser called');
    return orderModel.find({_user: userId})
        .populate('_user', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findAllOrdersByRestaurant(restaurantId) {
    console.log('Mongoose: findAllOrdersByrestaurant called');
    return orderModel.find({_restaurant: restaurantId})
        .populate('_restaurant', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findOrderById(userId, orderId) {
    console.log('Mongoose: findOrderById() called: ' + orderId);
    return orderModel.findOne({_id: orderId});
}

function updateOrder(userId, orderId, order) {
    console.log('Mongoose: updateOrder() called');
    orderModel.findOne({_id: orderId})
        .then(function (responseOrder) {
            if(responseOrder.status==0){
                return orderModel.updateOne({_id: orderId}, order);
            }
        });

}
function finishOrder(restaurantId,orderId) {
    console.log('Mongoose: finishOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.findOne({_id: orderId})
        .then(function (responseOrder) {
            responseOrder.status = 1;
            orderModel.updateOrder(orderId,responseOrder);
        // next, for the current restaurant/user, push this order into restaurant's order list.
        restaurantModel.findRestaurantById(restaurantId)
            .then(function (restaurant) {
                restaurant.oders.push(responseOrder);
                return restaurant.save();
            });
        return responseOrder;
    });
}
function deleteOrder(userId, orderId) {
    console.log('Mongoose: deleteOrder() called');
    // first, find the original order
    orderModel.findOne({_id: orderId})
        .then(function (responseOrder) {
            // next, for the current restaurant, delete this order from restaurant's order list.
            userModel.findUserById(userId)
                .then(function (user) {
                    user.order_history.pull({ _id: responseOrder._id });
                    return user.save();
                });
            return responseOrder;
        });
    // then, delete this order
    return orderModel.deleteOne({_id: orderId});
}
