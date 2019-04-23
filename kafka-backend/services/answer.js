const Question = require("../models/Question");
const Answer = require("../models/Answer");
const Profile = require("../models/Profile");

exports.answerService = function answerService(info, callback) {
  switch (info.method) {
    case "bookmarkAnswer":
      bookmarkAnswer(info, callback);
      break;
    case "upvoteAnswer":
      upvoteAnswer(info, callback);
      break;
    case "downvoteAnswer":
      downvoteAnswer(info, callback);
      break;
    case "addComment":
      addComment(info, callback);
      break;
    case "deleteComment":
      deleteComment(info, callback);
      break;
  }
};

function bookmarkAnswer(info, callback) {
  var answerid = info.message.answerid;
  Question.findOne({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let bookmarks = currentAnswer.bookmark || [];
      let bookmark;
      bookmarks.push(info.message.email);
      console.log(question);
      question.save().then(
        doc => {
          console.log("bookmark added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add bookmark.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function upvoteAnswer(info, callback) {
  var answerid = info.message.answerid;
  Question.find({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let upvotes = currentAnswer.upvote || [];
      upvotes.push(info.message.email);
      console.log(question);
      question.save().then(
        doc => {
          console.log("upvote added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add upvote.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function downvoteAnswer(info, callback) {
  var answerid = info.message.answerid;
  Question.find({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let downvotes = currentAnswer.downvote || [];
      downvotes.push(info.message.email);
      console.log(question);
      question.save().then(
        doc => {
          console.log("downvote added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add downvote.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function addComment(info, callback) {
  var email = info.message.email;
  var answer_id = info.message.answer_id;
  var comment = info.message.comment;
  var data = {
    email,
    answer_id,
    comment
  };

  Answer.findOneAndUpdate(
    { answer_id: answer_id },
    { $push: { comments: data } },
    (error, result) => {
      if (error) {
        callback(error, "error");
      } else {
        callback(null, data);
      }
    }
  );
}

function deleteComment(info, callback) {
  var email = info.message.email;
  var answer_id = info.message.answer_id;
  var comment = info.message.comment;
  var data = {
    email,
    answer_id,
    comment
  };

  Answer.findOneAndUpdate(
    { answer_id: answer_id },
    { $pull: { comments: data } },
    function(error, result) {
      if (error) {
        callback(error, "error");
      } else {
        console.log(result);
        callback(null, data);
      }
    }
  );
}
