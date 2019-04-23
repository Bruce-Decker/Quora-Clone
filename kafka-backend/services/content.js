var AnswerModel = require("../models/Answer");
//var BookmarkModel = require("../models/Bookmark");
var ProfileModel = require("../models/Profile");
var QuestionModel = require("../models/Question");
var followersModel = require("../models/UserFollowers");

function inbox(info, callback) {
  var response = {};
  var email = info.message.email;
  console.log(info);
  AnswerModel.find({ owner: email }, function(err, docs) {
    if (docs) {
      console.log(docs);
      response.Answer = docs;
    } else {
      console.log(err);
      callback(err, " Answer error");
    }
  });

  BookmarkModel.find({ marker_email: email }, function(err, docs) {
    if (docs) {
      console.log(docs);
      response.Bookmark = docs;
    } else {
      console.log(err);
      callback(err, " Bookmark error");
    }
  });

  ProfileModel.find({ email: email }, function(err, docs) {
    if (docs) {
      console.log(docs);
      response.Email = docs;
    } else {
      console.log(err);
      callback(err, " Profile error");
    }
  });

  QuestionModel.find({ owner: email }, function(err, docs) {
    if (docs) {
      console.log(docs);
      response.Email = docs;
    } else {
      console.log(err);
      callback(err, " Question error");
    }
  });

  followersModel.find({ follower_email: email }, function(err, docs) {
    if (docs) {
      console.log(docs);
      response.Following = docs;
    } else {
      console.log(err);
      callback(err, " Followers error");
    }
  });
  callback(null, response);
}

exports.inbox = inbox;
