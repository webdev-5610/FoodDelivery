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

    app.post('/api/restaurant/:websiteId/order', createPage);
    app.get('/api/restaurant/:websiteId/order', findPagesByWebsite);
    app.get('/api/restaurant/:websiteId/order/:pageId', findPageById);
    app.put('/api/restaurant/:websiteId/order/:pageId', updatePage);
    app.delete('/api/restaurant/:websiteId/order/:pageId', deletePage);

  // function list
  function createPage(req, res) {
    var page = req.body;
    var websiteId = req.params['websiteId'];
    page._website = websiteId;
    delete page._id;
    pageModel.createPage(websiteId, page)
        .then(function (page) {
              res.status(200).send(page);
              return page;  // must return order here, in order to prevent further asynchronous calls.
            },
            function (err) {
              console.log('create order error! ' + err);
              res.sendStatus(400);
              return err;

            });
  }

  function findPagesByWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(websiteId)
        .then(function (pages) {
          return res.status(200).json(pages);
        })

  }
  function findPageById(req, res){
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId).exec(
        function (err, page) {
          if (err) {
            return res.status(400).send(err);
          }
          if (page == null) {
            return res.sendStatus(404);
          }
          return res.status(200).send(page);
      }
    );
    }

  function updatePage(req, res) {
    var pageId = req.params["pageId"];
    var page = req.body;
    pageModel.updatePage(pageId, page).exec(
        function (err, page) {
          if (err) {
            return res.status(400).send(err);
          }
          return res.status(200).send(page);
      }
    )

  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    pageModel.deletePage(websiteId, pageId).exec(
        function (err, page) {
          if (err) {
            return res.status(400).send(err);
          } else {
            return res.status(200).send(page);
          }
      }
    )
}
}
