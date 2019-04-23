var Model = require("../models/UserFollowers");

exports.followService = function followService(info, callback) {
  switch (info.method) {
    case "follower":
      userFollowers(info, callback);
      break;
    case "followee":
      userFollowing(info, callback);
      break;
  }
};

function userFollowers(info, callback) {
  console.log("Inside Kafka Backend userFollowers");
  console.log("Message body: ", message.body);

  var email = info.message.email;

  Model.find({ leader_email: email }, (err, result) => {
    if (err) {
      console.log("Error in Retrieving user followers", err);
      callback(err, null);
    } else {
      console.log("Success in Retrieving user followers", result);

      console.log(JSON.stringify(result));

      callback(null, result);
    }
  });
}

function userFollowing(info, callback) {
  console.log("Inside Kafka Backend userFollowing");
  console.log("Message body: ", message.body);

  var email = info.message.email;

  Model.find({ follower_email: email }, (err, result) => {
    if (err) {
      console.log("Error in Retrieving user following", err);
      callback(err, null);
    } else {
      console.log("Success in Retrieving user following", result);

      console.log(JSON.stringify(result));

      callback(null, result);
    }
  });
}
