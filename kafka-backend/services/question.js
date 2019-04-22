const Question = require("../models/Question");
const Profile = require("../models/Profile");

exports.questionService = function questionService(info, callback) {
  switch (info.method) {
    case "searchQuestion":
      searchQuestion(info, callback);
      break;
    case "userQuestion":
      userQuestion(info, callback);
      break;
    case "followQuestion":
      folowQuestion(info, callback);
    case "dashboardQuestion":
      dashboardQuestion(info, callback);
      break;
  }
};

function searchQuestion(info, callback) {
  var question = info.message.question;
  Question.find({ question: new RegExp(question, "i") }, function(err, docs) {
    console.log(docs);
    console.log(err);
    if (docs) {
      console.log(docs);
      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function userQuestion(info, callback) {
  var email = info.message.email;
  Question.find({ owner: email }, function(err, docs) {
    console.log(docs);
    console.log(err);
    if (docs) {
      console.log(docs);
      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function dashboardQuestion(info, callback) {
  var email = info.body.email;
  Profile.findOne({ email: email }, { topics: 1 }, function(err, userTopics) {
    console.log(userTopics);
    console.log(err);
    if (userTopics) {
      console.log(userTopics);
      Question.find({ topics: userTopics });
    } else {
      Question.find({}, (err, questions) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, questions);
        }
      });
    }
  });
}

function folowQuestion(info, callback) {
  console.log(`info.body`);
  console.log(info.body);
  var email = info.body.email;
  var question_id = info.body.question_id;
  var data = {
    email:email
  }

  Question.findOneAndUpdate({question_id: question_id}, {followers:data}, function(error, result) {
    if (error) {
      callback(error,"error");
    } else {
        console.log(result)
        callback(null, data);
     }
  })
}
