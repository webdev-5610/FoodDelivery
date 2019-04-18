module.exports = function (app){
  require('./services/user.service.server')(app);
  require("./services/restaurant.service.server")(app);
  require("./services/order.service.server")(app);
  require('./services/deliver.service.server')(app);
  var db = require("./model/model.js");

};
