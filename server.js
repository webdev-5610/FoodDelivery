const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

//add cookies
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({ secret: 'S3CR#T!' }));

app.use(passport.initialize());
app.use(passport.session());

// var db = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds263847.mlab.com:63847/heroku_khn0t993');

var connectionString = 'mongodb://localhost:27017/web5610';
var mongoose = require("mongoose");

mongoose.createConnection(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port=process.env.PORT || '3200';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// For Build: Catch all other routes and return the index file -- BUILDING
//app.get('*', function (req, res) {
//  res.sendFile(path.join(__dirname, 'dist/index.html'));
//});



require("./server/app")(app);

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/web5610')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/**', function (req, res) {
  res.sendFile(__dirname + '/dist/web5610/index.html');
});


server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
