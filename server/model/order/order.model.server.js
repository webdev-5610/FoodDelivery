var mongoose = require('mongoose');
var userModel = require('../user/user.model.server');
var orderSchema = require('./order.schema.server');
var orderModel = mongoose.model("order",orderSchema);

orderModel.findAllOrdersByUser = findAllOrdersByUser;
orderModel.findAllOrdersByDeliver = findAllOrdersByDeliver;
orderModel.findOrderById = findOrderById;
orderModel.updateOrder = updateOrder;// also check status if finished or not.
orderModel.deleteOrder = deleteOrder;
orderModel.createOrder = createOrder;
orderModel.findOrdersByStatus = findOrdersByStatus;
orderModel.updateOrderStatus = updateOrderStatus;
orderModel.findOrdersByUserAndStatus = findOrdersByUserAndStatus;
orderModel.findOrdersByDeliverAndStatus = findOrdersByDeliverAndStatus;

module.exports = orderModel;

function createOrder(userId, order) {
    console.log('Mongoose: createOrder() called');
    // first, create the order with the name, description, date, etc.
    return orderModel.create(order);
}

function updateOrderStatus(userId, orderId, status) {
    console.log('Mongoose: updateOrderStatus() called');
    if(userId !== null){
        return orderModel.findByIdAndUpdate(orderId, { $set: {status: status,  deliverId: userId}}, {new: true});
    }
    else{
        return orderModel.findByIdAndUpdate(orderId, { $set: {status: status}}, {new: true});
    }
}

function findAllOrdersByUser(userId) {
    console.log('Mongoose: findAllOrdersByUser called');
    return orderModel.find({userId: userId, status: {$gt: 3}}); 
}

function findAllOrdersByDeliver(deliverId) {
    console.log('Mongoose: findAllOrdersByDeliver called');
    return orderModel.find({deliverId: deliverId, status: {$gt: 3}}); 
}

// function findOrdersByStatus(status) {
//     console.log('Mongoose: findOrdersByStatus called');
//     return orderModel.find({deliver: deliverId})
//         .populate('_restaurant', '_id');      // Do not append all the user info here. Just populate user with its id.
// }

function findOrderById(orderId) {
    console.log('Mongoose: findOrderById() called: ' + orderId);
    return orderModel.findById(orderId);
}

function updateOrder(orderId, order) {
    console.log('Mongoose: updateOrder() called');
    return orderModel.findByIdAndUpdate(orderId, order, {new: true});
}

function deleteOrder(userId, orderId) {
    console.log('Mongoose: deleteOrder() called');
    return orderModel.findByIdAndDelete(orderId);
}

function findOrdersByUserAndStatus(userId, status) {
    console.log('Mongoose: findOrdersByUserAndStatus called');
    return orderModel.find({userId: userId, status: status}); 
}

function findOrdersByDeliverAndStatus(deliverId, status) {
    console.log('Mongoose: findOrdersByDeliverAndStatus called');
    return orderModel.find({deliverId: deliverId, status: status});
}

function findOrdersByStatus(status) {
    console.log('Mongoose: findOrdersByStatus called');
    return orderModel.find({status: status});
}
