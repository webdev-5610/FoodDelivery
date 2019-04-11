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

    app.post('/api/:userId/order', createOrder);
    app.get('/api/:userId/order', findOrdersByUser);
    app.get('/api/:userId/order/:orderId', findOrderById);
    app.put('/api/:userId/order/:orderId', updateOrder);// also check status if finished or not.
    app.delete('/api/:userId/order/:orderId', deleteOrder);
    app.post('/api/:restaurantId/order',finishOrder);
    app.get('/api/:restaurantId/order',findAllOrdersByRestaurant);

  // function list
  function createOrder(req, res) {
    var order = req.body;
    var userId = req.params['userId'];
    order._user = userId;
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
    var userId = req.params['userId'];
    orderModel.findAllOrdersByUser(userId)
        .then(function (orders) {
          return res.status(200).json(orders);
        })

  }
  function findOrderById(req, res){
    var orderId = req.params['orderId'];
    orderModel.findOrderById(orderId).exec(
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
    var orderId = req.params["orderId"];
    var order = req.body;
    orderModel.updateOrder(orderId, order).exec(
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
  function finishOrder(req, res) {
      var order = req.body;
      var restaurantId = req.params['restaurantId'];
      order.restaurant = restaurantId;
      orderModel.finishOrder(restaurantId, order)
          .then(function (order) {
                  res.status(200).send(order);
                  return order;  // must return order here, in order to prevent further asynchronous calls.
              },
              function (err) {
                  console.log('finish order error! ' + err);
                  res.sendStatus(400);
                  return err;

              });

  }

  function findAllOrdersByRestaurant(req, res) {
      var restaurantId = req.params['restaurantId'];
      orderModel.findAllOrdersByRestaurant(restaurantId)
          .then(function (orders) {
              return res.status(200).json(orders);
          })

  }
};
