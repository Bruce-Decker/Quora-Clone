const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("/userFollowing", function(req, res) {
  kafka.make_request(
    "followers",
    { method: "userFollowing", message: req.query },
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

module.exports = router;
