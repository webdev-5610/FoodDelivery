var _ = require('lodash');
module.exports = function (app) {
    var restaurantModel = require("../model/restaurant/restaurant.model.server.js");
    var path = require('path');
    const multer = require('multer'); // npm install multer --save
    const baseUrl = 'http://localhost:8080';
    //'https://luckyhusky.herokuapp.com'
    //"http://localhost:8080"

    app.post("/api/restaurant/menu", createDish);
    app.get("/api/restaurant/menu", findAllDishesForMenu);
    app.get("/api/restaurant/menu/:did", findDishById);
    app.put("/api/restaurant/menu/:did", updateDish);
    app.delete("/api/restaurant/menu/:did", deleteDish);

    app.put("/api/restaurant/menu?", reorderDishes);

    var storage = multer.diskStorage({
        destination: __dirname + '/../../dist/web5610/assets/uploads/',
        filename: function (req, file, cb) {
            cb(null,  file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
        }
    });
    const upload = multer({
        storage: storage
    }).single("myFile");
    //UPLOAD
    app.post ("/api/upload", upload, uploadImage);
    app.get("/api/image/:imageName", findImage);

    function findImage(req, res) {
        var imageName = req.params.imageName;
        res.sendFile(path.resolve("/../../src/assets/uploads/" + imageName));
    }

    function uploadImage(req, res) {
        //var restaurantId = req.body.restaurantId;
        var width = req.body.width;
        var myFile = req.file;
        var name = req.body.name;
        var dishId = req.body.menuId;

        // condition when myFile is null
        const callbackUrl = baseUrl + '/restaurant/menu'+ dishId;
        if (myFile == null) {
            res.redirect(callbackUrl + '/' + restaurantId);
            return;
        }

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename; // new file name in upload folder
        //var filepath = myFile.path; // full path of uploaded file
        var destination = myFile.destination; // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        if (restaurantId === '') {
            var restaurant = {_id: '', restaurantType: 'IMAGE', pageId: pageId, size: '', text: '', width: '', url: '', name: ''};
            restaurant._id = (new Date()).getTime().toString();
            restaurant.url = baseUrl + '/assets/uploads/' + filename;

            console.log('create restaurant image: ' + restaurant._id);
            restaurants.push(restaurant);
            res.redirect(callbackUrl + '/' + restaurant._id);
            return;
        }

        var imageUrl = baseUrl + "/assets/uploads/" + filename;
        var restaurant = { url: imageUrl };
        restaurantModel
            .updateDish(restaurantId, restaurant)
            .then(function (stats) {
                    res.send(200);
                },
                function (err) {
                    res.sendStatus(404).send(err);
                });
        res.redirect(callbackUrl+ '/' + restaurantId);
    }
    // var pick = ["restaurantType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"];
    function createDish(req, res) {
        var pageId = req.params.pageId;
        var restaurant = _.pick(req.body, ["restaurantType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"]);
        console.log(restaurant);
        console.log(req.body);
        restaurantModel.createDish(pageId, restaurant).then(
            function (restaurant) {
                if (restaurant) {
                    res.json(restaurant);
                } else {
                    res.status(200).send({});
                }
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function findAllDishesForMenu(req, res) {
        var pageId = req.params.pageId;
        restaurantModel.findAllDishsForPage(pageId).then(
            function (restaurant) {
                res.json(restaurant);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function reorderDishes(req, res) {
        var pageId = req.params.pageId;
        var startIndex = parseInt(req.query.initial);
        var endIndex = parseInt(req.query.final);

        restaurantModel
            .reorderDishs(pageId, startIndex, endIndex)
            .then(function (stats) {
                res.status(200).send({});
            }, function (err) {
                res.status(400).send(err);
            });
    }

    function findDishById(req, res) {
        var restaurantId = req.params.restaurantId;
        restaurantModel
            .findDishById(restaurantId)
            .then(function (restaurant) {
                    res.json(restaurant);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

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
