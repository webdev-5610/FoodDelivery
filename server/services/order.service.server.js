import {Order} from "../../src/app/model/order.client.model";

module.exports = function(app) {
  // fake data
  // var orders=[
  //   { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
  //   { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
  //   { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }
  //
  // ];
  // db
  const orderModel = require('../model/order/order.model.server');
  // api list

    app.post('/api/user/:userId/order', createOrder);
    app.post('/api/deliver/:deliverId/order', orderAccept);
    app.get('/api/user/:userId/order', findOrdersByUser);
    app.get('/api/user/:userId/order/:orderId', findOrderById);
    app.put('/api/user/:userId/order/:orderId', updateOrder);// also check status if finished or not.
    app.delete('/api/user/:userId/order/:orderId', deleteOrder);
    app.get('/api/user/:userId/order/:orderId/:status',findOrdersByStatus);
    api.put('/api/user/:userId/order/:orderId/:status', updateOrderStatus);
    app.get('/api/deliver/:deliverid/order', findOrdersByDeliver);



    // function list
  function createOrder(req, res) {
    var order = req.body;
    var userId = req.params['userId'];
    order.user = userId;
    delete order._id;
    orderModel.createOrder(userId, order)
        .then(function (order) {
              res.status(200).send(order);
              return order;  // must return order here, in order to prevent further asynchronous calls.
            },
            function (err) {
              console.log('create order error! ' + err);
              res.sendStatus(400);
              return err;

            });
  }



  function findOrdersByUser(req, res) {
      const userId = req.params['userId'];
    orderModel.findAllOrdersByUser(userId)
        .then(function (orders) {
          return res.status(200).json(orders);
        })

  }

    function findOrdersByDeliver(req,res) {
        const deliverId = req.params['deliverId'];
        orderModel.findAllOrdersByDeliver(deliverId)
            .then(function (orders) {
                return res.status(200).json(orders);
            })

    }
  function findOrderById(req, res){
      var userId = req.params['userId'];
    var orderId = req.params['orderId'];
    orderModel.findOrderById(userId,orderId).exec(
        function (err, order) {
          if (err) {
            return res.status(400).send(err);
          }
          if (order == null) {
            return res.sendStatus(404);
          }
          return res.status(200).send(order);
      }
    );
    }

  function updateOrder(req, res) {
      var userId = req.params['userId'];
    var orderId = req.params["orderId"];
    var order = req.body;
    orderModel.updateOrder(userId,orderId, order).exec(
        function (err, order) {
          if (err) {
            return res.status(400).send(err);
          }
          return res.status(200).send(order);
      }
    )

  }

  function deleteOrder(req, res) {
    var orderId = req.params['orderId'];
    var userId = req.params['userId'];
    orderModel.deleteOrder(userId, orderId).exec(
        function (err, order) {
          if (err) {
            return res.status(400).send(err);
          } else {
            return res.status(200).send(order);
          }
      }
    )
}

    function findOrdersByStatus(req, res){
        var deliverId = req.params['deliverId'];
        var status = req.params.status;
        orderModel.findOrdersByStatus(deliverId,status).exec(
            function (err, [order]) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (order == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send([order]);
            }
        );
    }

    function orderAccept(req,res) {
      var order = req.body;
      var deliverId = req.params['deliverId'];
      order.deliver = deliverId;
      orderModel.orderAccept(deliverId, order)
            .then(function (order) {
                    res.status(200).send(order);
                    return order;  // must return order here, in order to prevent further asynchronous calls.
                },
                function (err) {
                    console.log('create order error! ' + err);
                    res.sendStatus(400);
                    return err;
                });
    }
    function updateOrderStatus(req,res) {
      const orderStatus = req.params.status;
      const userId = req.params['userId'];
      const orderId = req.params["orderId"];
      const order = oderModel.findOrderById(userId,orderId);
        if (orderStatus===1){
          finishOrder(res,userId,orderId,order);
      }
        if (orderStatus===2){
            postOrder(res,userId,orderId,order);
        }
        if (orderStatus===3){
            acceptOrder(res,userId,orderId,order);
        }
        if (orderStatus===4){
            completeOrder(res,userId,orderId,order);
        }
        if (orderStatus===5){
            cancelOrder(res,userId,orderId,order);
        }

    }
  function postOrder(res,userId,orderId,order) {
      orderModel.postOrder(userId,orderId, order).exec(
          function (err, order) {
              if (err) {
                  return res.status(400).send(err);
              }
              return res.status(200).send(order);
          }
      )
  }

    function acceptOrder(res,userId,orderId,order) {
        orderModel.acceptOrder(userId,orderId, order).exec(
            function (err, order) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(order);
            }
        )
    }
    function completeOrder(res,userId,orderId,order) {
        orderModel.completeOrder(userId,orderId, order).exec(
            function (err, order) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(order);
            }
        )
    }
    function cancelOrder(res,userId,orderId,order) {
        orderModel.cancelOrder(userId,orderId, order).exec(
            function (err, order) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(order);
            }
        )
    }
    function finishOrder(res,userId,orderId,order) {
        orderModel.finishOrder(userId,orderId, order).exec(
            function (err, order) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(order);
            }
        )
    }



};
