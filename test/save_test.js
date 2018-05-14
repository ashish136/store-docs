const assert = require("assert");
const aadharModel = require("../models/aadhar_model");
//describe tests
describe("Saving records", function() {
  //create tests
  it("Saves a record to the database", function(done) {
    var record = new aadharModel({
      name: "ashish",
      id: 924567345672
    });

    record.save().then(function() {
      assert(record.isNew === false);
      done();
    });
  });
});
