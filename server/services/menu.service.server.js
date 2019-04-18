var _ = require('lodash');
module.exports = function (app) {
    var menuModel = require("../model/menu/menu.model.server.js");
    var path = require('path');
    const multer = require('multer'); // npm install multer --save
    const baseUrl = 'http://localhost:8080';
    //'https://luckyhusky.herokuapp.com'
    //"http://localhost:8080"

    app.post("/api/restaurant/menu", createDish);
    app.get("/api/restaurant/menu/", findAllDishesForMenu);
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
        var dishId = req.body.dishId;
        var width = req.body.width;
        var myFile = req.file;
        var name = req.body.name;

        // condition when myFile is null
        const callbackUrl = baseUrl + '/restaurant/menu/'+ dishId;
        if (myFile == null) {
            res.redirect(callbackUrl + '/' + dishId);
            return;
        }

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename; // new file name in upload folder
        //var filepath = myFile.path; // full path of uploaded file
        var destination = myFile.destination; // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        if (dishId === '') {
            var dish = {_id: '', dish_name: '', price: 0, description: '', url: ''};
            dish._id = (new Date()).getTime().toString();
            dish.url = baseUrl + '/assets/uploads/' + filename;

            console.log('create dish image: ' + dish._id);
            dishs.push(dish);
            res.redirect(callbackUrl + '/' + dish._id);
            return;
        }

        var imageUrl = baseUrl + "/assets/uploads/" + filename;
        var dish = { url: imageUrl };
        menuModel
            .updateDish(dishId, dish)
            .then(function (stats) {
                    res.send(200);
                },
                function (err) {
                    res.sendStatus(404).send(err);
                });
        res.redirect(callbackUrl+ '/' + dishId);
    }
    // var pick = ["dishType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"];
    function createDish(req, res) {
        // var pageId = req.params.pageId;
        var dish = _.pick(req.body, ["dish_name",  "description", "url", "price"]);
        console.log(dish);
        console.log(req.body);
        menuModel.createDish(dish).then(
            function (dish) {
                if (dish) {
                    res.json(dish);
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

        menuModel.findAllDishes().then(
            function (dish) {
                res.json(dish);
                console.log(dish);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function reorderDishes(req, res) {
        var startIndex = parseInt(req.query.initial);
        var endIndex = parseInt(req.query.final);

        menuModel
            .reorderDishs(startIndex, endIndex)
            .then(function (stats) {
                res.status(200).send({});
            }, function (err) {
                res.status(400).send(err);
            });
    }

    function findDishById(req, res) {
        var dishId = req.params.dishId;
        menuModel
            .findDishById(dishId)
            .then(function (dish) {
                    res.json(dish);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

    function updateDish(req, res) {
        var dishId = req.params.dishId;
        var updatedDish = _.pick(req.body,["name", "description", "price", "url"]);
        menuModel.updateDish(dishId, updatedDish)
            .then(function (stats) {
                    res.json(stats);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

    function deleteDish(req, res) {
        var dishId = req.params.dishId;
        menuModel.deleteDish(dishId).then(
            function (stats) {
                res.json(stats);
            },
            function (err) {
                res.status(404).send(err);
            }
        );
    }
}
