const express = require("express");
const router = express.Router();
const Aadhar = require("../models/aadhar_model.js");

router.get("/aadhar", function(req, res) {
  res.send({ type: "GET" });
});

router.post("/aadhar", function(req, res) {
  Aadhar.create(req.body).then(
    function(aadhar) {
      res.send(req.body);
    },
    function(err) {
      res.send(err.message);
    }
  );
});
module.exports = router;
