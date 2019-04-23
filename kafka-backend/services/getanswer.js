var question = require("../models/Question");

function handle_request(msg, callback) {
  let answer_id = msg.answer_id;
  question
    .find({ "answers.answer_id": answer_id })
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

exports.handle_request = handle_request;
