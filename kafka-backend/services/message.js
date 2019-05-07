const Profile = require("../models/Profile");

exports.messageService = function messageService(info, callback) {
  switch (info.method) {
    case "sendMessage":
      createMessage(info, callback);
      break;
    case "viewMessage":
      viewMessage(info, callback);
      break;
    case "inbox":
      inbox(info, callback);
      break;
  }
};

function createMessage(info, callback) {
  console.log(`info`);
  console.log(info);
  var message = info.body.message;
  var sender_email = info.body.sender_email;
  var receiver_email = info.body.receiver_email;
  var subject = info.body.subject;
  var isRead = false;
  var time = new Date().toLocaleString();
  var isDeleted = false;
  var data = {
    subject,
    message,
    sender_email,
    receiver_email,
    isRead,
    time,
    isDeleted
  };
  Profile.findOneAndUpdate(
    { email: sender_email },
    { $push: { message: data } },
    function(err, result) {
      if (err) {
        callback(err, "error");
      } else {
        console.log(result);
        Profile.findOneAndUpdate(
          { email: receiver_email },
          { $push: { message: data } },
          function(error, resultdata) {
            if (error) {
              callback(error, "error");
            } else {
              callback(null, data);
            }
          }
        );
      }
    }
  );
}

function viewMessage(info, callback) {
  console.log(`info.body`);
  console.log(info.body);
  Profile.findOne({ email: info.body.email }, (err, res) => {
    if (err) {
      callback(err, "error");
    } else {
      chatHistory(res.message, result => {
        callback(null, result);
      });
    }
  });
  // let data = [];
  // callback(null, data);
}

chatHistory = (useremail, message, callback) => {
  message.forEach(function(element) {});
  callback(message);
};

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
