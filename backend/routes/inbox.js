const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.get("inbox", function(req, res) {
  kafka.make_request("inbox", { method: "inbox", message: req.query }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot find inbox" });
    } else {
      if (result.errors) {
        return res.status(400).json(result.errors);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  });
});

module.exports = router;
