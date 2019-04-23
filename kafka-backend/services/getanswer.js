var answer = require("../models/Answer");

function handle_request(msg, callback) {
  answer
    .find({ answer_id: "395278" })
    .then(data => {
      console.log("Data............", data);
      return callback(null, data);
    })
    .catch(err => {
      return callback(err);
    });
}

exports.handle_request = handle_request;
