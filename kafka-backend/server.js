var connection = new require("./kafka/Connection");

var mongoose = require("mongoose");
const db_url = require("./config/keys").mlab_url;
const url = process.env.MONGODB_URI || db_url;
const url2 = "mongodb+srv://admin:admin@quoracluster-v64on.mongodb.net/quoradb";
mongoose
  .connect(url2, { useNewUrlParser: true })
  .then(() => console.log("Mongo Database is alive"))
  .catch(err => console.log(err));

//Services
var auth = require("./services/authentication");
var profile = require("./services/profile");
var topic = require("./services/topic");
var userFollowers = require("./services/userFollowers");
var userFollowing = require("./services/userFollowing");
var question = require("./services/question");
var inbox = require("./services/inbox");
var content = require("./services/content");

function handleTopicRequest(topic_name, fname) {
  //var topic_name = 'root_topic';
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function(message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    console.log("Sdfsdf  " + topic_name);
    switch (topic_name) {
      case "auth":
        auth.authService(data.data, function(err, res) {
          response(data, res, producer);
          return;
        });
        break;
      case "profile":
        profile.profileService(data.data, function(err, res) {
          response(data, res, producer);
          return;
        });
        break;
      case "topic":
        topic.topicService(data.data, function(err, res) {
          response(data, res, producer);
          return;
        });
        break;
      case "question":
        question.questionService(data.data, function(err, res) {
          response(data, res, producer);
          return;
        });
        break;
    }
  });
}

function response(data, res, producer) {
  console.log("after handle", res);
  var payloads = [
    {
      topic: data.replyTo,
      messages: JSON.stringify({
        correlationId: data.correlationId,
        data: res
      }),
      partition: 0
    }
  ];
  producer.send(payloads, function(err, data) {
    console.log("producer send", data);
  });
  return;
}

handleTopicRequest("auth", auth);
handleTopicRequest("profile", profile);
handleTopicRequest("topic", topic);
handleTopicRequest("userFollowers", userFollowers);
handleTopicRequest("userFollowing", userFollowing);
handleTopicRequest("question", question);
handleTopicRequest("inbox", inbox);
handleTopicRequest("content", content);
