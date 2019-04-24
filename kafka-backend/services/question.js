const Question = require("../models/Question");
const Profile = require("../models/Profile");
const cache = require("../cache");

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
    case "postQuestion":
      postQuestion(info, callback);
      break;
    case "getQuestions":
      getQuestions(info, callback);
      break;
    case "unfollowQuestion":
      unfollowQuestion(info, callback);
      break;
  }
};

function postQuestion(info, callback) {
  var question_id = info.message.question_id;
  var question = info.message.question;
  var topics = info.message.topics;
  var owner = info.message.owner;
  var followers = info.message.followers;
  var answers = info.message.answers;
  var postedDate = info.message.postedDate;
  var data = {
    question_id,
    question,
    topics,
    owner,
    followers,
    answers,
    postedDate
  };

  Question.findOne({ question_id: question_id }, function(err, docs) {
    if (docs) {
      Question.findOneAndUpdate({ question_id: question_id }, data, function(
        err,
        result
      ) {
        if (err) {
          //res.send("Fail")
          callback(null, "Fail");
        } else {
          console.log(result);
          //res.send("Update successfully")
          callback(null, "Update successfully");
        }
      });
    } else {
      Question.create(data, function(err, newlyCreated) {
        if (err) {
          //res.send({msg: "False"});
          callback(null, { msg: "False" });
        } else {
          //res.send({msg: "True"});
          callback(null, { msg: "True" });
        }
      });
    }
  });
}

function searchQuestion(info, callback) {
  var question = info.message.question;
  let searchObj = {
    question: new RegExp(question, "i")
  };
  cache.get(searchObj, function(err, res) {
    if (!err && res) {
      console.log("Returning from redis......");
      return callback(null, res);
    }
    Question.find({ question: new RegExp(question, "i") }, function(err, docs) {
      console.log(docs);
      console.log(err);
      if (docs) {
        console.log(docs);
        callback(null, docs);
        cache.set({
          keyObj: searchObj,
          value: docs
        });
      } else {
        console.log(err);
        callback(err, "error");
      }
    });
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
  var email = info.message.email;
  let projection = {
    answers: 0,
    question_id: 0,
    question: 0,
    owner: 0,
    followers: 0,
    posted_date: 0
  };
  Profile.findOne({ email: email }, function(err, user) {
    console.log(user);

    console.log(info.message);
    var email = info.message.email;
    Profile.findOne({ email: email }, { topics: 1 }, function(err, userTopics) {
      console.log(userTopics);

      console.log(err);
      if (user) {
        console.log(user);
        Question.paginate({ topics: user.topics }, (err, questions) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, questions);
          }
        });
      } else {
        const options = {
          page: info.message.pageno,
          limit: 10
        };
        Question.paginate({}, options, (err, questions) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, questions);
          }
        });
      }
    });
  });
}

function folowQuestion(info, callback) {
  console.log(`info.body`);
  console.log(info.body);
  var email = info.body.email;
  var question_id = info.body.question_id;
  var data = {
    email: email
  };

  Question.findOneAndUpdate(
    { question_id: question_id },
    { $push: { followers: data } },
    (error, result) => {
      if (error) {
        callback(error, "error");
      } else {
        callback(null, data);
      }
    }
  );
}

function unfollowQuestion(info, callback) {
  console.log(`info.body`);
  console.log(info.body);
  var email = info.body.email;
  var question_id = info.body.question_id;
  var data = {
    email: email
  };

  Question.findOneAndUpdate(
    { question_id: question_id },
    { $pull: { followers: data } },
    function(error, result) {
      if (error) {
        callback(error, "error");
      } else {
        console.log(result);
        callback(null, data);
      }
    }
  );
}
