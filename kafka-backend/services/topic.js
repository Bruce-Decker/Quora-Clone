const Topic = require("../models/Topic");
const Profile = require('../models/Profile')
var async = require('async');

exports.topicService = function topicService(info, callback) {
  switch (info.method) {
    case "searchTopic":
      searchTopic(info, callback);
      break;
    case "getTopic":
      searchTopic(info, callback);
      break;
    case "postTopic":
      postTopic(info, callback);
      break;
    case "folowTopic":
      folowTopic(info, callback);
      break;
    case "getUserTopic":
      getUserTopic(info, callback);
      break;
  }
};

<<<<<<< HEAD

function getUserTopic(info, callback) {
   var email = info.email
   Profile.findOne({email: email}, function(err, docs) {
     if (docs) {
      callback(null, docs)
     } else {
      callback(null, [])
     }
   })

}


=======
>>>>>>> d4d8f7704d48132f83001709fa1a1f8a6705cf78
function postTopic(info, callback) {
  var topic_id = info.message.topic_id;
  var topic_name = info.message.topic_name;
  var data = {
    topic_id,
    topic_name
  };

  Topic.findOne({ topic_id: topic_id }, function(err, docs) {
    if (docs) {
      Topic.findOneAndUpdate({ topic_id: topic_id }, data, function(
        err,
        result
      ) {
        if (err) {
          res.send("Fail");
        } else {
          console.log(result);
          callback(null, { msg: "Update successfully", data: data });
        }
      });
    } else {
      Topic.create(data, function(err, newlyCreated) {
        if (err) {
          callback(null, { msg: "False" });
        } else {
          callback(null, { msg: "True", data: data });
        }
      });
    }
  });
}

function searchTopic(info, callback) {
  var topic = info.message.topic_name;
  Topic.find({ topic_name: new RegExp(topic, "i") }, function(err, docs) {
    console.log(docs);
    console.log(err);
    if (docs) {
      console.log(docs);
      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

<<<<<<< HEAD
function folowTopic(info, callback){
  
  console.log(info.body);
  var email = info.body.email;
  var topic_name = info.body.topic_name;
  var data = {
    topic_name: topic_name
  }

  Profile.findOne({email: email}, function(error, result) {
    if (error) {
        callback(error,"error1");
    } else {
        //console.log(result.topics)
        console.log(result)
        console.log("A1 " + JSON.stringify(result.topics))
      
        result.topics = result.topics.push(data)
        console.log("A2 " + JSON.stringify(result.topics))
        callback(null, data);
        Profile.findOneAndUpdate({email: email}, {$set: {topics: result.topics}}, function(err, result) {
            if (err) {
              //console.log(topics_update)
              callback(error,"error2");
            } else {
              callback(null, result);
            }
        })
     }
  })
=======
function getTopic(info, callback) {
  Topic.find({}, function(err, docs) {
    console.log(docs);
    console.log(err);
    if (docs) {
      console.log(docs);
      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
  function folowTopic(info, callback) {
    console.log(`info.body`);
    console.log(info.body);
    var email = info.body.email;
    var topic_id = info.body.topic_id;
    var data = {
      email: email
    };

    Topic.findOneAndUpdate(
      { topic_id: topic_id },
      { followers: data },
      function(error, result) {
        if (error) {
          callback(error, "error");
        } else {
          console.log(result);
          callback(null, data);
        }
      }
    );
  }
>>>>>>> d4d8f7704d48132f83001709fa1a1f8a6705cf78
}
