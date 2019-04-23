module.exports = function (app){
  require('./services/user.service.server')(app);
  require("./services/order.service.server")(app);
  require('./services/deliver.service.server')(app);
  require("./services/menu.service.server")(app);
  var db = require("./model/model.js");

};
