var Model = require("../models/UserFollowers");

function userFollowers(info, callback) {
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

exports.userFollowers = userFollowers;
