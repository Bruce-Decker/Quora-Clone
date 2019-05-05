const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");


router.post('/createQuestion', function(req, res) {
  kafka.make_request('question', {"method": "postQuestion", "message": req.body}, function(error, result) {
      if (error) {
          console.log(error)
          res.status(400).json({msg: 'cannot question'});
      } else {
             if (result.errors) {
                return res.status(400).json(result.errors);
             } else {
                res.send(result)
             }
      }
  })
})

router.get('/getQuestion/:question_id', function(req, res) {
  kafka.make_request('question', {"method": "getQuestion", "question_id": req.params.question_id}, function(error, result) {
      if (error) {
          console.log(error)
          res.status(400).json({msg: 'cannot get question'});
      } else {
             if (result.errors) {
                return res.status(400).json(result.errors);
             } else {
                res.send(result)
             }
      }
  })
})

router.get('/getTopicQuestions', function(req, res) {
  kafka.make_request('question', {"method": "getTopicQuestions", "topic": req.params.topic}, function(error, result) {
      if (error) {
          console.log(error)
          res.status(400).json({msg: 'cannot get question'});
      } else {
             if (result.errors) {
                return res.status(400).json(result.errors);
             } else {
                res.send(result)
             }
      }
  })
})

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

router.get("/dashboard", function(req, res) {
  kafka.make_request(
    "question",
    { method: "dashboardQuestion", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot find questions" });
      }else {
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

router.post("/unfollow", function(req, res) {
  console.log(req.body);
  kafka.make_request(
    "question",
    { method: "unfollowQuestion", body: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot unfollow question" });
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