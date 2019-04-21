const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("/keyword", function(req, res) {
  kafka.make_request(
    "question",
    { method: "searchQuestion", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find questions" });
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

router.get("/user", function(req, res) {
  kafka.make_request(
    "question",
    { method: "userQuestion", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find questions" });
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
