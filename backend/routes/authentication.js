const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Auth = require("../schema/AuthModel");
var mysql = require("mysql");
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


router.post("/unDeleteUser", function(req, res) {
  console.log("Sdfdfs");
  console.log(req.body);
  kafka.make_request("auth", { method: "undelete", body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot delete user" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        res.send(result);
      }
    }
  });
});


router.post("/deleteUser", function(req, res) {
  console.log("Sdfdfs");
  console.log(req.body);
  kafka.make_request("auth", { method: "delete", body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot delete user" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        res.send(result);
      }
    }
  });
});

router.post("/activateUser", function(req, res) {
  console.log("Sdfdfs");
  console.log(req.body);
  kafka.make_request("auth", { method: "activate", body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot deactivate user" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        res.send(result);
      }
    }
  });
});


router.post("/deactivateUser", function(req, res) {
  console.log("Sdfdfs");
  console.log(req.body);
  kafka.make_request("auth", { method: "deactivate", body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot deactivate user" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        res.send(result);
      }
    }
  });
});

module.exports = router;
