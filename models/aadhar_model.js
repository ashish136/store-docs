const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema and Model

const aadharDocSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true]
  },
  name: {
    type: String,
    required: [true]
  },
  id: {
    type: String,
    required: [true]
  },
  dob: {
    type: Date,
    required: [false]
  }
});

const aadharModel = mongoose.model("aadharmodel", aadharDocSchema);

module.exports = aadharModel;
