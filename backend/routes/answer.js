const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.post("/bookmark", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "bookmarkAnswer", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot bookmark answer" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          res.send(result);
        }
      }
    }
  );
});

router.post("/upvote", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "upvoteAnswer", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot upvote answer" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          res.send(result);
        }
      }
    }
  );
});

router.post("/downvote", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "downvoteAnswer", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot downvote answer" });
      } else {
        if (result.errors) {
          return res.status(400).json(result.errors);
        } else {
          res.send(result);
        }
      }
    }
  );
});

router.post("/", function(req, res) {
  kafka.make_request("createanswer", { body: req.body }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "Unable to save answer" });
    } else {
      res.send(result);
    }
  });
});

router.get("/", function(req, res) {
  kafka.make_request("getanswer", { answer_id: req.query.answer_id }, function(
    error,
    result
  ) {
    if (error) {
      console.log(error);
      res.status(400).json({ msg: "cannot login user" });
    } else {
      res.send(result);
    }
  });
});

router.get("/list", function(req, res) {
  kafka.make_request(
    "fetchanswers",
    { question_id: req.query.question_id },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot login user" });
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
