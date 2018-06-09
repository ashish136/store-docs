const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema and Model

const userDetail = new Schema({
  name: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true]
  },
  dob: {
    type: Date,
    required: [true]
  }
});

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true]
  },
  password: {
    type: String,
    required: [true]
  },
  details: userDetail
});

const userModel = mongoose.model("usermodel", userSchema);

module.exports = userModel;
