var Model = require("../models/Profile");

exports.followService = function followService(info, callback) {
  switch (info.method) {
    case "follower":
      userFollowers(info, callback);
      break;
    case "followee":
      userFollowing(info, callback);
      break;
    case "follow":
      followUser(info, callback);
      break;
    case "unfollow":
      unfollowUser(info, callback);
      break;
  }
};

function userFollowers(info, callback) {
  console.log("Inside Kafka Backend userFollowers");

  var email = info.message.email;
  console.log("email:", email);

  Model.find({ email: email }, { "followers.email": 1 }, (err, result) => {
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

  var email = info.message.email;

  Model.find({ "followers.email": email }, { email: 1 }, (err, result) => {
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

function followUser(info, callback) {
  console.log("info.message", info.message);
  var data = {};
  data.email = info.message.follower_email;
  var leader_email = info.message.leader_email;
  data.time = new Date();

  Model.findOneAndUpdate(
    { email: leader_email },
    { $push: { followers: data } },
    (error, result) => {
      if (error) {
        callback(error, "error");
      } else {
        callback(null, result);
      }
    }
  );
}

function unfollowUser(info, callback) {
  console.log("info.message", info.message);
  var follower_email = info.message.follower_email;
  var leader_email = info.message.leader_email;

  Model.findOneAndUpdate(
    { email: leader_email },
    { $pull: { followers: { email: follower_email } } },
    function(error, result) {
      if (error) {
        callback(error, "error");
      } else {
        console.log(result);
        callback(null, result);
      }
    }
  );
}
