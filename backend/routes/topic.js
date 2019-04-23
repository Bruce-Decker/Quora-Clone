const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");


router.get('/getUserTopic/:email', function(req, res) {
  kafka.make_request('topic', {"method": "getUserTopic", "email": req.params.email}, function(error, result) {
      if (error) {
          console.log(error)
          res.status(400).json({msg: 'assignments are not found'});
      } else {
          res.send(result)
      }
  })
})


router.post("/createTopics", function(req, res) {
  kafka.make_request('topic', {"method": "postTopic", "message": req.body}, function(error, result) {
    if (error) {
        console.log(error)
        res.status(400).json({msg: 'profile not found'});
    } else {
        res.send(result)
    }
})
})


router.get("/", function(req, res) {
  kafka.make_request(
    "topic",
    { method: "searchTopic", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find topics" });
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
  kafka.make_request('topic', {"method": "folowTopic", "body": req.body}, function(error, result) {
    if (error) {
        console.log(error)
        res.status(400).json({msg: 'profile not found'});
    } else {
        res.send(result)
    }
})
})

module.exports = router;
