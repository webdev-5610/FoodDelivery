module.exports = function(app) {
  // fake data
  // var pages=[
  //   { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
  //   { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
  //   { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }
  //
  // ];
  // db
  const orderModel = require('../model/order/order.model.server');
  // api list

    app.post('/api/restaurant/:websiteId/order', createOrder);
    app.get('/api/restaurant/:websiteId/order', findOrdersByWebsite);
    app.get('/api/restaurant/:websiteId/order/:pageId', findOrderById);
    app.put('/api/restaurant/:websiteId/order/:pageId', updateOrder);
    app.delete('/api/restaurant/:websiteId/order/:pageId', deleteOrder);

  // function list
  function createOrder(req, res) {
    var page = req.body;
    var websiteId = req.params['websiteId'];
    page._website = websiteId;
    delete page._id;
    orderModel.createOrder(websiteId, order)
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

  function findOrdersByWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    orderModel.findAllOrdersForWebsite(websiteId)
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
    var websiteId = req.params['websiteId'];
    orderModel.deleteOrder(websiteId, orderId).exec(
        function (err, order) {
          if (err) {
            return res.status(400).send(err);
          } else {
            return res.status(200).send(order);
          }
      }
    )
}
}
