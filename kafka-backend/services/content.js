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
    {},
    { sort: { posted_date: -1 } },
    function(err, docs) {
      if (docs) {
        console.log("docs", docs);
        response.QuestionsAsked = docs;
        console.log("response", response);
        AnswerModel.find(
          { owner: email },
          {},
          { sort: { answered_time: "desc" } },
          function(err, docs) {
            if (docs) {
              console.log(docs);
              response.Answers = docs;
              QuestionModel.find(
                { "followers.email": email },
                {},
                { sort: { "followers.time": -1 } },
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

function filteredContent(info, callback) {
  console.log("filteredContent in Kafka");
  var email = info.message.email;
  var activityType = info.message.activityType;
  var year = info.message.year;
  console.log("year", year);
  var order = info.message.order ? info.message.order : -1;
  var start, end;
  if (year) {
    start = new Date(`${year}-01-01`);
    end = new Date(`${Number(year) + 1}-01-01`);
  } else {
    start = new Date(`2000-01-01`);
    end = new Date(`2030-01-01`);
  }
  console.log("start=", start, "end=", end);
  console.log(info);
  switch (activityType) {
    case "QuestionAsked":
      QuestionModel.find(
        {
          $and: [
            {
              owner: email
            },

            {
              postedDate: { $gte: start }
            },
            {
              postedDate: { $lt: end }
            }
          ]
        },
        { question_id: 1, question: 1, postedDate: 1 },
        { sort: { postedDate: order } },
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
          followers: {
            $elemMatch: { email: email, time: { $gte: start, $lte: end } }
          }
        },
        {
          question_id: 1,
          question: 1,
          followers: {
            $elemMatch: { email: email, time: { $gte: start, $lte: end } }
          }
        },
        { sort: { "followers.time": order } },
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
      QuestionModel.find(
        {
          answers: {
            $elemMatch: {
              owner: email,
              answered_time: { $gte: start, $lte: end }
            }
          }
        },
        {
          question_id: 1,
          question: 1,
          answers: {
            $elemMatch: {
              owner: email,
              answered_time: { $gte: start, $lte: end }
            }
          }
        },
        { sort: { "answers.answered_time": order } },
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
