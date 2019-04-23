const Question = require("../models/Question");
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
  }
};
