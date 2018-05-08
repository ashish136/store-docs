const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema and Model

const aadharDocSchema = new Schema({
  name: String,
  id: String,
  dob: date
});

const aadharModel = mongoose.model("aadharmodel", aadharDocSchema);

module.exports = aadharModel;
