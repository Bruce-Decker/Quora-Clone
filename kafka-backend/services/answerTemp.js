var answer = require("../models/Answer");

function handle_request(msg, callback) {
  console.log("in handle request........", msg.body);
  var answerPayload = new answer({
    answerContent: msg.body
  });
  answerPayload
    .save()
    .then(data => {
      console.log("Data............", data);
      return callback(null, msg.body);
    })
    .catch(err => {
      return callback(err);
    });
}

exports.handle_request = handle_request;
