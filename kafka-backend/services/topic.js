const Topic = require("../models/Topic");

exports.topicService = function topicService(info, callback) {
  switch (info.method) {
    case "searchTopic":
      searchTopic(info, callback);
      break;
  }
};

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
