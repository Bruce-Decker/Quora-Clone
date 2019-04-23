var question = require("../models/Question");

function handle_request(msg, callback) {
  console.log("in get answers");
  let question_id = msg.question_id;
  question
    .find({ question_id: question_id })
    .then(data => {
      if (!data.length) return callback({ msg: "No question found" });
      let answers = data[0].answers;
      return callback(null, answers);
    })
    .catch(err => {
      return callback(err);
    });
}

exports.handle_request = handle_request;
