const mongoose = require("mongoose");

//ES6 Promise
mongoose.Promise = global.Promise;

before(function(done) {
  //connect to mongodb
  mongoose.connect("mongodb://localhost/StoreDoc");

  mongoose.connection
    .once("open", function() {
      console.log("connection has been made");
      done();
    })
    .on("error", function(err) {
      console.log("connection error", err);
    });
});
