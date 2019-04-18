var _ = require('lodash');
module.exports = function (app) {
    var restaurantModel = require("../model/restaurant/restaurant.model.server.js");
    var path = require('path');
    const multer = require('multer'); // npm install multer --save
    const baseUrl = 'http://localhost:8080';
    //'https://luckyhusky.herokuapp.com'
    //"http://localhost:8080"


    function updateDish(req, res) {
        var restaurantId = req.params.restaurantId;
        var updatedDish = _.pick(req.body,["restaurantType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"]);
        restaurantModel.updateDish(restaurantId, updatedDish)
            .then(function (stats) {
                    res.json(stats);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

    function deleteDish(req, res) {
        var restaurantId = req.params.restaurantId;
        restaurantModel.deleteDish(restaurantId).then(
            function (stats) {
                res.json(stats);
            },
            function (err) {
                res.status(404).send(err);
            }
        );
    }
}
