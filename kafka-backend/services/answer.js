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
    case "getanswer":
      getanswer(info, callback);
      break;
    case "fetchanswers":
      fetchanswers(info, callback);
      break;
    case "createanswer":
      createanswer(info, callback);
      break;
  }
};

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

function getanswer(msg, callback) {
  let answer_id = msg.answer_id;
  Question.find({ "answers.answer_id": answer_id })
    .then(data => {
      if (!data.length) return callback({ msg: "No answer found" });
      let answers = data[0].answers;
      let answer = answers.filter(function(answer) {
        if (answer.answer_id == answer_id) return true;
      });
      return callback(null, answer[0]);
    })
    .catch(err => {
      return callback(err);
    });
}

function fetchanswers(msg, callback) {
  console.log("in get answers");
  let question_id = msg.question_id;
  Question.find({ question_id: question_id })
    .then(data => {
      if (!data.length) return callback({ msg: "No question found" });
      let answers = data[0].answers;
      return callback(null, answers);
    })
    .catch(err => {
      return callback(err);
    });
}

function createanswer(msg, callback) {
  msg = msg.body;
  let currentElem = msg.currentElem;
  let question_id = msg.question_id;
  Question.findOneAndUpdate(
    { question_id: question_id },
    { $push: { answers: { answerContent: currentElem } } }
  )
    .then(data => {
      return callback(null, msg.body);
    })
    .catch(err => {
      return callback(err);
    });
}
