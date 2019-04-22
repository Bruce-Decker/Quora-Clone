var Model = require("../models/Message");

function inbox(info, callback) {
  var email = info.message.email;
  console.log(info);
  Model.find({ receiver_email: email }, function(err, docs) {
    if (docs) {
      console.log(docs);
      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

exports.inbox = inbox;
