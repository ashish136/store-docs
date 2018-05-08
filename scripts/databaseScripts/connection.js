const mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost/StoreDoc");

mongoose.connection
  .once("open", function() {
    console.log("connection has been made");
  })
  .on("error", function(err) {
    console.log("connection error", err);
  });
