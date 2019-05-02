const express = require("express");
const router = express.Router();
const kafka = require("../kafka/client");

router.post('/', function(req, res) {
    console.log(req.body);

    kafka.make_request('message', {"method": "sendMessage", "body": req.body}, function(error, result) {
        if (error) {
            console.log(error)
            res.status(400).json({msg: 'cannot create user'});
        } else {

               if (result.errors) {
                  return res.status(400).json(result.errors);
               } else {
                   console.log(result)
                  res.send(result)
               }
        }
    })
    //res.status(200).json({success:`success`});
})

router.get('/', function(req, res) {
    console.log(req.body);

    kafka.make_request('message', {"method": "viewMessage", "body": req.body}, function(error, result) {
        if (error) {
            console.log(error)
            res.status(400).json({msg: 'cannot create user'});
        } else {

               if (result.errors) {
                  return res.status(400).json(result.errors);
               } else {
                   console.log(result)
                  res.send(result)
               }
        }
    })
    //res.status(200).json({success:`success`});
})

module.exports = router;