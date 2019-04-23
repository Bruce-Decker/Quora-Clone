const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserFollowersSchema = new Schema({
  follower_email: {
    type: String,
    required: true
  },
  leader_email: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = UserFollowers = mongoose.model(
  "UserFollowers",
  UserFollowersSchema
);
