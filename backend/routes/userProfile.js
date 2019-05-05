const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.post("/createProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "createProfile", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot create user" });
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

router.get("/viewProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "viewProfile", message: req.query },
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

router.get("/getProfileViews", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "getProfileViews", message: req.query },
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

router.post("/deleteProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "deleteProfile", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot delete user" });
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

router.post("/activate", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "activate", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot activate user" });
      } else {
        console.log("result activate", result);
        res.send(result);
      }
    }
  );
});

router.post("/deactivate", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "activate", message: req.body },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot deactivate user" });
      } else {
        console.log("result deactivate", result);
        res.send(result);
      }
    }
  );
});

router.get("/isActive", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "isActive", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot deactivate user" });
      } else {
        console.log("result deactivate", result);
        res.send(result);
      }
    }
  );
});

module.exports = router;
