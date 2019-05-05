const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("/userFollowers", function(req, res) {
  kafka.make_request(
    "follow",
    { method: "follower", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find userFollowers" });
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

router.get("/userFollowing", function(req, res) {
  kafka.make_request(
    "follow",
    { method: "followee", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find userFollowing" });
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

router.post("/followUser", function(req, res) {
  kafka.make_request(
    "follow",
    { method: "follow", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot follow user" });
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

router.post("/unfollowUser", function(req, res) {
  kafka.make_request(
    "follow",
    { method: "unfollow", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot unfollow user" });
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

module.exports = router;
