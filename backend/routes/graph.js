const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("/upvote", function(req, res) {
    kafka.make_request(
      "graph",
      { method: "upvote" },
      function(error, result) {
        if (error) {
          console.log(error);
          res.status(400).json({ msg: "cannot find answers" });
        }else {
            console.log(result);
            res.send(result);
          }
      }
    );
  });

  router.get("/downvote", function(req, res) {
    kafka.make_request(
      "graph",
      { method: "downvote" },
      function(error, result) {
        if (error) {
          console.log(error);
          res.status(400).json({ msg: "cannot find answers" });
        }else {
            console.log(result);
            res.send(result);
          }
      }
    );
  });

  router.get("/bookmark", function(req, res) {
    kafka.make_request(
      "graph",
      { method: "bookmark" },
      function(error, result) {
        if (error) {
          console.log(error);
          res.status(400).json({ msg: "cannot find answers" });
        }else {
            console.log(result);
            res.send(result);
          }
      }
    );
  });

  module.exports = router;