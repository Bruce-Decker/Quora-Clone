const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("/", function(req, res) {
  console.log("in content backend", req.query);
  kafka.make_request(
    "content",
    { method: "content", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find content" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          console.log("content results", result);
          res.send(result);
        }
      }
    }
  );
});

router.get("/filteredContent", function(req, res) {
  console.log("in filteresContent backend", req.query);

  kafka.make_request(
    "content",
    { method: "filteredContent", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find user" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          console.log("filteredContent", result);
          res.send(result);
        }
      }
    }
  );
});

module.exports = router;
