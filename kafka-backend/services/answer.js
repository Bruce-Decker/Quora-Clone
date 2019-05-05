const Question = require("../models/Question");
const Answer = require("../models/Answer");
const Profile = require("../models/Profile");

exports.answerService = function answerService(info, callback) {
  switch (info.method) {
    case "bookmarkAnswer":
      bookmarkAnswer(info, callback);
      break;
    case "upvoteAnswer":
      upvoteAnswer(info, callback);
      break;
    case "downvoteAnswer":
      downvoteAnswer(info, callback);
      break;
    case "addComment":
      addComment(info, callback);
      break;
    case "deleteComment":
      deleteComment(info, callback);
      break;
    case "getanswer":
      getanswer(info, callback);
      break;
    case "fetchanswers":
      fetchanswers(info, callback);
      break;
    case "createanswer":
      createanswer(info, callback);
      break;
    case "userList":
      userList(info, callback);
      break;
    case "updateAnswer":
      updateAnswer(info, callback);
      break;
  }
};

function bookmarkAnswer(info, callback) {
  var answerid = info.message.answerid;
  Question.findOne({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let bookmarks = currentAnswer.bookmark || [];
      let bookmark;
      bookmarks.push(info.message.email);
      console.log(question);
      question.save().then(
        doc => {
          console.log("bookmark added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add bookmark.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function upvoteAnswer(info, callback) {
  var answerid = info.message.answerid;
  Question.find({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let upvotes = currentAnswer.upvote || [];
      upvotes.push(info.message.email);
      console.log(question);
      question.save().then(
        doc => {
          console.log("upvote added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add upvote.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function downvoteAnswer(info, callback) {
  var answerid = info.message.answerid;
  Question.find({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let downvotes = currentAnswer.downvote || [];
      downvotes.push(info.message.email);
      console.log(question);
      question.save().then(
        doc => {
          console.log("downvote added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add downvote.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function addComment(info, callback) {
  console.log(info);
  var data = {};
  data.email = info.message.email;
  var answerid = info.message.answer_id;
  data.comment = info.message.comment;
  data.name = info.message.name
  data.time = new Date();
  console.log("data", data, "answerid", answerid);

  /*   Question.findOne({ "answers.answer_id": answerid }, function(err, question) {
    console.log(question);
    console.log(err);
    if (question) {
      let currentAnswer = question.answers.find(
        answer => answer.answer_id === answerid
      );
      let comments = currentAnswer.comments || [];
      comments.push(data);
      console.log(question);
      question.save().then(
        doc => {
          console.log("comment added.", doc);
          callback(null, doc);
        },
        err => {
          console.log("Unable to add comment.", err);
          callback(err, null);
        }
      );
    } else {
      console.log(err);
      callback(err, "error");
    }
  }); */
  Question.findOneAndUpdate(
    { "answers.answer_id": answerid },
    {
      $push: {
        "answers.$[element].comments": {
          email: data.email,
          name: data.name,
          comment: data.comment,
          time: data.time
        }
      }
    },
    {
      arrayFilters: [{ "element.answer_id": answerid }]
    },
    function(err, result) {
      if (result) {
        console.log(result);
        callback(null, result);
      } else {
        console.log(err);
        callback(err, " add comment error");
      }
    }
  );
}

function deleteComment(info, callback) {
  var email = info.message.email;
  var answer_id = info.message.answer_id;
  var comment = info.message.comment;
  var data = {
    email,
    answer_id,
    comment
  };

  Answer.findOneAndUpdate(
    { answer_id: answer_id },
    { $pull: { comments: data } },
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

function getanswer(msg, callback) {
  console.log("aaaaaaaaa.......", msg.answer_id);
  let answer_id = msg.answer_id;
  Question.find({ "answers.answer_id": answer_id })
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

function fetchanswers(msg, callback) {
  console.log("in get answers");
  let question_id = msg.question_id;
  Question.find({ question_id: question_id })
    .then(data => {
      if (!data.length) return callback({ msg: "No question found" });
      let answers = data[0].answers;
      return callback(null, answers);
    })
    .catch(err => {
      return callback(err);
    });
}

function createanswer(msg, callback) {
  msg = msg.body;
  let currentElem = msg.currentElem;
  let question_id = msg.question_id;
  Question.findOneAndUpdate(
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

function userList(msg, callback) {
  let email = msg.email;
  Question.find({ "answers.owner": email })
    .then(data => {
      if (!data.length) return callback({ msg: "No question found" });
      const resp = data.map(function(d) {
        let res = { answer: [] };
        let answers = d.answers;

        for (var i = 0; i < answers.length; i++) {
          let answer = answers[i];
          if (answer.owner === email) res["answer"].push(answer);
        }
        res["question"] = d.question;
        return res;
      });
      return callback(null, resp);
    })
    .catch(err => {
      return callback(err);
    });
}

function updateAnswer(msg, callback) {
  msg = msg.body;
  let currentElem = msg.currentElem;
  let question_id = msg.question_id;
  let answer_id = msg.answer_id;

  Question.find({
    question_id: question_id,
    "answers.answer_id": answer_id
  }).then(data => {
    if (!data || !data.length) {
      return callback("Unable to fetch question");
    }
    data = data[0];
    let answers = data.answers;

    let index = -1;
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].answer_id == answer_id) {
        index = i;
      }
    }

    if (index == -1) return callback("Answer does not exist");
    answers[index].answerContent = currentElem;
    answers[index].answered_time = new Date();
    Question.findOneAndUpdate(
      { question_id: question_id },
      {
        $set: { answers: answers }
      }
    ).then(data => {
      return callback();
    });
  });
}
