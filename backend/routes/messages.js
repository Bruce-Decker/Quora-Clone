const express = require("express");
const router = express.Router();


const kafka = require("../kafka/client");

function seconds_with_leading_zeros(dt) {
  return (dt < 10 ? "0" : "") + dt;
}

router.post("/sendMessage", function(req, res) {
  kafka.make_request(
    "message",
    { method: "post_sendMessage", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "message not found" });
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/getMessages/:receiver_email", function(req, res) {
  kafka.make_request(
    "message",
    { method: "get_getMessages", receiver_email: req.params.receiver_email },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "message not found" });
      } else {
        res.send(result);
      }
    }
  );
});
router.get(
  "/getExchangedMessages/:receiver_email/:sender_email/:subject",
  function(req, res) {
    kafka.make_request(
      "message",
      {
        method: "getExchangedMessages",
        receiver_email: req.params.receiver_email,
        sender_email: req.params.sender_email,
        subject: req.params.subject
      },
      function(error, result) {
        if (error) {
          console.log(error);
          res.status(400).json({ msg: "message not found" });
        } else {
          res.send(result);
        }
      }
    );
  }
);
