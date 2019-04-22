const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("/", function(req, res) {
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

router.post("/follow", function(req, res) {
  console.log(req.body);
  kafka.make_request(
    "question",
    { method: "followQuestion", body: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot follow questions" });
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
