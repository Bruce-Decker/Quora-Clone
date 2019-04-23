var AnswerModel = require("../models/Answer");
//var BookmarkModel = require("../models/Bookmark");
var ProfileModel = require("../models/Profile");
var QuestionModel = require("../models/Question");
var followersModel = require("../models/UserFollowers");

exports.contentService = function contentService(info, callback) {
  switch (info.method) {
    case "content":
      content(info, callback);
      break;
    case "filteredContent":
      filteredContent(info, callback);
      break;
  }
};

function content(info, callback) {
  var response = {};
  var email = info.message.email;

  console.log(info);
  AnswerModel.find(
    { owner: email },
    { sort: [["answered_time", "desc"]] },
    function(err, docs) {
      if (docs) {
        console.log(docs);
        response.Answer = docs;
      } else {
        console.log(err);
        callback(err, " Answer error");
      }
    }
  );

  QuestionModel.find(
    { owner: email },
    { sort: [["posted_date", "desc"]] },
    function(err, docs) {
      if (docs) {
        console.log(docs);
        response.Email = docs;
      } else {
        console.log(err);
        callback(err, " Question error");
      }
    }
  );

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

//API: /content/sort?email=<email>activityType=<activityType>&year=<year>&order=<order> (Get request)

function filteredContent(info, callback) {
  var response = {};
  var email = info.message.email;
  var activityType = info.message.activityType;
  var year = info.message.year;
  var order = info.message.order;
  console.log(info);
  switch (activityType) {
    case "QuestionAsked":
      QuestionModel.find(
        { postDate: year, owner: email },
        { sort: [["postedDate", order]] },
        function(err, docs) {
          if (docs) {
            console.log(docs);
            callback(null, docs);
          } else {
            console.log(err);
            callback(err, " Question Asked error");
          }
        }
      );
      break;
    case "QuestionFollowed":
      QuestionModel.find(
        { postDate: year, "followers.email": email },
        { sort: [["followers.time", order]] },
        function(err, docs) {
          if (docs) {
            console.log(docs);
            callback(null, docs);
          } else {
            console.log(err);
            callback(err, " Question Followed error");
          }
        }
      );
      break;
    case "Answers":
      AnswerModel.find(
        { postDate: year, owner: email },
        { sort: [["answered_time", order]] },
        function(err, docs) {
          if (docs) {
            console.log(docs);
            callback(null, docs);
          } else {
            console.log(err);
            callback(err, " Answers error");
          }
        }
      );
      break;
    default:
      content(info, callback);
  }
}
