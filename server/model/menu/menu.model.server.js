var mongoose = require('mongoose');
var menuSchema = require('./menu.schema.server.js');
var Menu = mongoose.model('Menu', menuSchema);

Menu.createDish = createDish;
Menu.findAllDishes = findAllDishes;
Menu.findDishById = findDishById;
Menu.updateDish = updateDish;
Menu.deleteDish = deleteDish;
Menu.reorderDishes = reorderDishes;
Menu.resetDishes = resetDishes;

module.exports =Menu;

function createDish(dish) {
    dish.position = 999999;
    return Menu.create(dish);
}

function findAllDishes() {
    return Menu.find({}).sort({ position: 1, dateCreated: 1});
}

function findDishById(dishId) {
    return Menu.findById(dishId);
}

function updateDish(dishId, dish) {
    console.log('backend: update dish!')
    return Menu.findByIdAndUpdate(dishId, dish, {new: true});
}

function deleteDish(dishId) {
    Menu.findById(dishId, function (err, foundDish) {
        var index = foundDish.position;
        resetDishes(index);
    });
    return Menu.findByIdAndRemove(dishId);
}

function resetDishes(index) {
    Menu.find({}, function (err, dishes) {
        dishes.forEach(function (dish) {
            if (dish.position > index) {
                dish.position--;
                dish.save();
            }
        })
    })
}

function reorderDishes(start, end) {
    return Menu.find({}).sort({ position: 1, dateCreated: 1}).then(function (dishes) {
        var x = dishes[start];
        dishes.splice(start, 1);
        dishes.splice(end, 0, x);
        for (var i = 0; i < dishes.length; ++i) {
            dishes[i].position = i;
            dishes[i].save();
        }
        return {};
    });
}
