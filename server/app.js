module.exports = function (app){

  // // api list. The restful calls with the same method stay together
  // app.get("/api/hello", function(req, res) {
  //   // req: request
  //   // res: response
  //   console.log("reached /api/hello");
  //   res.send("Hello world!");
  //
  // });
  //


// separate the test restful call into another file and pass 'app' to that file.
// Just include the 'test' file by 'require' word
  require('./services/user.service.server')(app);
  require("./services/website.service.server")(app);
  require("./services/page.service.server")(app);
  require("./services/widget.service.server")(app);

};
