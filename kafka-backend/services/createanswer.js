var question = require("../models/Question");

function handle_request(msg, callback) {
  msg = msg.body;
  let currentElem = msg.currentElem;
  let question_id = msg.question_id;
  question
    .findOneAndUpdate(
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

exports.handle_request = handle_request;
