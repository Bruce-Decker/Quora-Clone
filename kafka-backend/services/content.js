var AnswerModel = require("../models/Answer");
//var BookmarkModel = require("../models/Bookmark");
//var ProfileModel = require("../models/Profile");
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

  console.log("info", info);

  QuestionModel.find(
    { owner: email },
    // { sort: [["posted_date", "desc"]] },
    function(err, docs) {
      if (docs) {
        console.log("docs", docs);
        response.QuestionsAsked = docs;
        console.log("response", response);
        AnswerModel.find(
          { owner: email },
          // { sort: [["answerers.answered_date", "desc"]] },
          function(err, docs) {
            if (docs) {
              console.log(docs);
              response.Answers = docs;
              QuestionModel.find(
                { "followers.email": email },
                // { sort: [["answerers.answered_date", "desc"]] },
                function(err, docs) {
                  if (docs) {
                    console.log(docs);
                    response.QuestionsFollowed = docs;
                    console.log("resonse in kafka", response);
                    callback(null, response);
                  } else {
                    console.log(err);
                    callback(err, " Question followed error");
                  }
                }
              );
            } else {
              console.log(err);
              callback(err, " Answered error");
            }
          }
        );
      } else {
        console.log(err);
        callback(err, " Question error");
      }
    }
  );
}

//API: /content/sort?email=<email>activityType=<activityType>&year=<year>&order=<order> (Get request)

function filteredContent(info, callback) {
  console.log("filteredContent in Kafka");
  var email = info.message.email;
  var activityType = info.message.activityType;
  var year = info.message.year;
  var order = info.message.order;
  var start = new Date(`${year}-01-01`);
  var end = new Date(`${Number(year) + 1}-01-01`);
  console.log("start=", start, "end=", end);
  console.log(info);
  switch (activityType) {
    case "QuestionAsked":
      QuestionModel.find(
        {
          postedDate: {
            $gt: start,
            $lt: end
          },
          owner: email
        },

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
        {
          "followers.time": {
            $gte: start,
            $lt: end
          },
          "followers.email": email
        },
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
        {
          answered_time: {
            $gte: start,
            $lt: end
          },
          owner: email
        },
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
