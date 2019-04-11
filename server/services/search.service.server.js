'use strict';

const restaurantModel = require('../model/restaurant/restaurant.model.server');

module.exports = function (app) {
    app.post("/api/restaurant/search", searchRestaurants);

    function searchRestaurants(req, res) {
        let name = req.params.name;
        let type = req.params.type;
        let city = req.params.city;

        restaurantModel.find(type ? {type: type} : {}).then(
            restaurants => {
                if(restaurants == null){
                    res.send([]);
                }
                else{
                    let result = [];
                    for(let i = 0; i<restaurants.length; i++){
                        if(restaurants[i].name.indexOf(name) !== -1 && restaurants[i].address.indexOf(city) !== -1){
                            result.push(restaurants[i]);
                        }
                    }
                    res.send(result);
                }
            }, error => {
                res.sendStatus(500).json(error);
            }
        );
    }
}


