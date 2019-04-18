var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var db_url = process.env.MONGO_URL || "mongodb://localhost:27017/restaurant";
var client = mongoose.connect(db_url, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
