const Question = require("../models/Question");

exports.questionService = function questionService(info, callback) {
  switch (info.method) {
    case "searchQuestion":
      searchQuestion(info, callback);
      break;
    case "userQuestion":
      userQuestion(info, callback);
      break;
  }
};

function searchQuestion(info, callback) {
  var question = info.message.question;
  Question.find({ question: new RegExp(question, "i") }, function(err, docs) {
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

function userQuestion(info, callback) {
  var email = info.message.email;
  Question.find({ owner: email }, function(err, docs) {
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