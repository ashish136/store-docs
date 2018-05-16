const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//set up express app
const app = express();

mongoose.connect("mongodb://localhost/StoreDoc");
mongoose.Promise = global.Promise;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.use("/api", routes);
//listen for requests
app.listen(4000, function() {
  console.log("now listening for requests");
});
