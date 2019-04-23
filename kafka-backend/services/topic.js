const Topic = require("../models/Topic");

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
  }
};

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
function folowTopic(info, callback){
  console.log(`info.body`);
  console.log(info.body);
  var email = info.body.email;
  var topic_id = info.body.topic_id;
  var data = {
    email:email
  }

  Topic.findOneAndUpdate({topic_id: topic_id}, {followers:data}, function(error, result) {
    if (error) {
        callback(error,"error");
    } else {
        console.log(result)
        callback(null, data);
     }
  })
}
