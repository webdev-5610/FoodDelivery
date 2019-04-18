var mongoose = require('mongoose');
var userModel = require('../user/user.model.server');
var orderSchema = require('./order.schema.server');
var orderModel = mongoose.model("order",orderSchema);
var restaurantModel = require("../restaurant/restaurant.model.server");

orderModel.findAllOrdersByUser = findAllOrdersByUser;
orderModel.findAllOrdersByDeliver = findAllOrdersByDeliver;
orderModel.findOrderById = findOrderById;
orderModel.updateOrder = updateOrder;// also check status if finished or not.
orderModel.deleteOrder = deleteOrder;
orderModel.createOrder = createOrder;
orderModel.finishOrder = finishOrder;
orderModel.postOrder = postOrder;
orderModel.acceptOrder=acceptOrder;
orderModel.completeOrder = completeOrder;
orderModel.cancelOrder=cancelOrder;
orderModel.findOrdersByStatus = findOrdersByStatus;

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
    return orderModel.find({user: userId})
        .populate('_user', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findAllOrdersByDeliver(deliverId) {
    console.log('Mongoose: findAllOrdersByrestaurant called');
    return orderModel.find({deliver: deliverId})
        .populate('_restaurant', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findOrdersByStatus(status) {
    console.log('Mongoose: findOrdersByStatus called');
    return orderModel.find({deliver: deliverId})
        .populate('_restaurant', '_id');      // Do not append all the user info here. Just populate user with its id.

}

function findOrderById(userId, orderId) {
    console.log('Mongoose: findOrderById() called: ' + orderId);
    return orderModel.findOne({id: orderId});
}

function updateOrder(userId, orderId, order) {
    console.log('Mongoose: updateOrder() called');
    orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            if(responseOrder.status==0){
                return orderModel.updateOne({_id: orderId}, order);
            }
        });

}
function postOrder(deliverId,orderId) {
    console.log('Mongoose: finishOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            responseOrder.status = 1;
            orderModel.updateOrder(orderId,responseOrder);
            // next, for the current deliver/user, push this order into deliver's order list.
            orderModel.findDeliverById(deliverId)
                .then(function (deliver) {
                    deliver.oders.push(responseOrder);
                    return deliver.save();
                });
            return responseOrder;
        });
}

function finishOrder(deliverId,orderId) {
    console.log('Mongoose: finishOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            responseOrder.status = 1;
            orderModel.updateOrder(orderId,responseOrder);
            // next, for the current deliver/user, push this order into deliver's order list.
            orderModel.findDeliverById(deliverId)
                .then(function (deliver) {
                    deliver.oders.push(responseOrder);
                    return deliver.save();
                });
            return responseOrder;
        });
}

function acceptOrder(deliverId,orderId) {
    console.log('Mongoose: finishOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            responseOrder.status = 1;
            orderModel.updateOrder(orderId,responseOrder);
            // next, for the current deliver/user, push this order into deliver's order list.
            orderModel.findDeliverById(deliverId)
                .then(function (deliver) {
                    deliver.oders.push(responseOrder);
                    return deliver.save();
                });
            return responseOrder;
        });
}
function cancelOrder(deliverId,orderId) {
    console.log('Mongoose: finishOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            responseOrder.status = 1;
            orderModel.updateOrder(orderId,responseOrder);
            // next, for the current deliver/user, push this order into deliver's order list.
            orderModel.findDeliverById(deliverId)
                .then(function (deliver) {
                    deliver.oders.push(responseOrder);
                    return deliver.save();
                });
            return responseOrder;
        });
}
function completeOrder(deliverId,orderId) {
    console.log('Mongoose: finishOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            responseOrder.status = 1;
            orderModel.updateOrder(orderId,responseOrder);
            // next, for the current deliver/user, push this order into deliver's order list.
            orderModel.findDeliverById(deliverId)
                .then(function (deliver) {
                    deliver.oders.push(responseOrder);
                    return deliver.save();
                });
            return responseOrder;
        });
}
function deleteOrder(userId, orderId) {
    console.log('Mongoose: deleteOrder() called');
    // first, find the original order
    orderModel.findOne({id: orderId})
        .then(function (responseOrder) {
            // next, for the current deliver, delete this order from deliver's order list.
            userModel.findUserById(userId)
                .then(function (user) {
                    user.order_history.pull({ id: responseOrder.id });
                    return user.save();
                });
            return responseOrder;
        });
    // then, delete this order
    return orderModel.deleteOne({id: orderId});
}
