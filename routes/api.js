const express = require("express");
const router = express.Router();
const Aadhar = require("../models/aadhar_model.js");
const user = require("../models/users.js");

router.post("/user", function(req, res) {
  user.find(req.body).then(
    function(user) {
      if (user.length > 0) {
        res.send({ data: user });
      } else {
        res.send({ data: "error" });
      }
    },
    function(err) {
      res.send(err);
    }
  );
});

router.post("/aadhar", function(req, res, next) {
  Aadhar.create(req.body)
    .then(function(aadhar) {
      res.send(req.body);
    })
    .catch(next);
});
router.get("/aadhar/:id", function(req, res, next) {
  console.log(req.params.id);
  Aadhar.find({ userId: req.params.id })
    .then(function(data) {
      if (data.length > 0) {
        res.send({ found: true, aadhar: data });
      } else {
        res.send({ found: false });
      }
    })
    .catch(next);
});
router.put("/aadhar", function(req, res, next) {
  console.log(req.body);
  Aadhar.findOneAndUpdate({ _id: req.body._id }, req.body)
    .then(function(aadhar) {
      res.send({ update: true });
    })
    .catch(next);
});
/*****************api for registering user***************************/
router.post("/registerUser", function(req, res) {
  user.create(req.body).then(
    function(user) {
      res.send(user);
    },
    function(err) {
      res.send(err.message);
    }
  );
});
/*****************api for user login***************************/
router.post("/login", function(req, res) {
  user.find(req.body).then(
    function(user) {
      if (user.length > 0) {
        res.send({ userStatus: "user found", data: user });
      } else {
        res.send({ userStatus: "user not found" });
      }
    },
    function(err) {
      res.send(err);
    }
  );
});
module.exports = router;
