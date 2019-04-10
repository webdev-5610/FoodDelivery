module.exports = function(app) {
  // fake data
  // var websites = [
  //   { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
  //   { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
  //   { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
  //   { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
  //   { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
  //   { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
  //   { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
  //
  // ];
  const websiteModel = require('../model/restaurant/restaurant.model.server');
  // api list
    app.post('/api/user/:userId/restaurant', createWebsite);
    app.get('/api/user/:userId/restaurant', findWebsitesByUser);
    app.get('/api/user/:userId/restaurant/:websiteId', findWebsiteById);
    app.put('/api/user/:userId/restaurant/:websiteId', updateWebsite);
    app.delete('/api/user/:userId/restaurant/:websiteId', deleteWebsite);

  // functions
  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params['userId'];
    website._user = userId;
    delete website._id;
    websiteModel.createWebsiteForUser(userId, website)
        .then(function (website) {
              res.status(200).send(website);
              return website;  // must return user here, in order to prevent further asynchronous calls.
            },
            function (err) {
              console.log('create restaurant error! ' + err);
              res.sendStatus(400);
              return err;

            });
  }
  
  function findWebsitesByUser(req, res) {
    var userId = req.params['userId'];
      console.log(userId);
    websiteModel.findAllWebsitesForUser(userId)
        .then(function (websites) {
            console.log(websites);
          return res.status(200).json(websites);
        })

  }
  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId).exec(
        function (err, website) {
          if (err) {
              return res.status(400).send(err);
          }
          if (website == null) {
              return res.sendStatus(404);
          }
          return res.status(200).send(website);

  })
  }

  function updateWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website).exec(
        function (err, website) {
          if (err) {
              return res.status(400).send(err);
          }
          return res.status(200).send(website);
    });
  }
  
  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    websiteModel.deleteWebsite(userId, websiteId).exec(
        function (err, website) {
          if (err) {
            return res.status(400).send(err);
          }
            return res.status(200).send(website);
        }
    )
  }

}
