const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");
const awsConfig = require("../config/awsConfig");

const singleUpload = awsConfig.single("image");

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

router.get("/searchProfile", function(req, res) {
  kafka.make_request(
    "profile",
    { method: "searchProfile", message: req.query },
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

router.get("/views", function(req, res) {
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

router.get("/image", function(req, res) {
  console.log("get image");
  kafka.make_request(
    "profile",
    { method: "getImage", message: req.query },
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).json({ msg: "cannot get image url" });
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
