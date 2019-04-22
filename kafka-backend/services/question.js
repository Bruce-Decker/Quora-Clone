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
    case "dashboardQuestion":
      dashboardQuestion(info, callback);
      break;
    case "postQuestion":
      postQuestion(info, callback);
      break;
  }
};

function postQuestion(info, callback) {
  var question_id = info.message.question_id
  var question = info.message.question
  var topics = info.message.topics
  var owner = info.message.owner
  var followers = info.message.followers
  var answers = info.message.answers
  var postedDate = info.message.postedDate
  var data = {
    question_id,
    question,
    topics,
    owner,
    followers,
    answers,
    postedDate,
  }

  Question.findOne({question_id: question_id}, function(err, docs) {
		if (docs) {
			Question.findOneAndUpdate({question_id: question_id}, data, function(err, result) {
				 if (err) {
                     //res.send("Fail")
                     callback(null, "Fail")
				 } else {
				 	console.log(result)
                     //res.send("Update successfully")
                     callback(null, "Update successfully")
	 			 }
			})
		} else {
			  
               Question.create(data, function(err, newlyCreated) {
					if (err) {
                         //res.send({msg: "False"});
                         callback(null, {msg: "False"})
					} else {
                         //res.send({msg: "True"});
                         callback(null, {msg: "True"})
					}
			   })
		}
	})
}



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
  var email = info.message.email;
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
