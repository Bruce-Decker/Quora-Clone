const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Auth = require("../schema/AuthModel");

const kafka = require("../kafka/client");

router.post("/register", function(req, res) {
  kafka.make_request("auth", { method: "register", body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot create user" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        console.log("safsdf123");
        console.log(result);
        res.send(result);
      }
    }
  });
});

router.post("/login", function(req, res) {
  console.log("Sdfdfs");
  console.log(req.body);
  kafka.make_request("auth", { method: "login", body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot login user" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        res.send(result);
      }
    }
  });
});

router.post("/answer", function(req, res) {
  console.log("Sdfdfs", req.body);
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
