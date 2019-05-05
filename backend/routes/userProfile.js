const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");
const awsConfig = require("../config/awsConfig");

const singleUpload = awsConfig.single("image");

router.post("/createProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "createProfile", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot create user" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    }
  );
});

router.get("/viewProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "viewProfile", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find user" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    }
  );
});

router.get("/getProfileViews", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "getProfileViews", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find user" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    }
  );
});

router.post("/deleteProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "deleteProfile", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot delete user" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    }
  );
});

router.post("/upload", function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }]
      });
    }
    console.log("Aaaaaaa", req.file);
    return res.json({ imageUrl: req.file.location });
  });
});

module.exports = router;
