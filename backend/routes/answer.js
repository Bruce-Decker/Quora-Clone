const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");
const awsConfig = require("../config/awsConfig");

const singleUpload = awsConfig.single("image");

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
  kafka.make_request(
    "answer",
    { method: "createanswer", body: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "Unable to save answer" });
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/", function(req, res) {
  console.log("bbbbbb....", req.query);
  kafka.make_request(
    "answer",
    { method: "getanswer", answer_id: req.query.answer_id },
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

router.get("/list", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "fetchanswers", question_id: req.query.question_id },
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

router.post("/comment", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "addComment", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot question" });
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

router.get("/userList", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "userList", email: req.query.email },
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

router.put("/", function(req, res) {
  kafka.make_request(
    "answer",
    { method: "updateAnswer", body: req.body },
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
