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


function addComment(info, callback) {
  console.log(`info.body`);
  console.log(info);
  var email = info.message.email;
  var answer_id = info.message.answer_id;
  var comment = info.message.comment;
  var data = {
    email,
    answer_id,
    comment
  }

  Answer.findOneAndUpdate({answer_id: answer_id}, {$push: {comments: data}}, (error, result) => {
    if (error) {
        callback(error,"error");
    } else {
        callback(null, data);
    }
  })
}

function deleteComment(info, callback) {
  console.log(`info.body`);
  console.log(info.body);
  var email = info.body.email;
  var answer_id = info.body.answer_id;
  var comment = info.body.comment;
  var data = {
    email,
    answer_id,
    comment
  }

  Answer.findOneAndUpdate({answer_id: answer_id}, {$pull: {comments: data}}, function(error, result) {
    if (error) {
      callback(error,"error");
    } else {
        console.log(result)
        callback(null, data);
     }
  })
}
