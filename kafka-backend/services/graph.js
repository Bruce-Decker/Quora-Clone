var Question = require("../models/Question");
exports.graphService = function graphService(info, callback) {
  switch (info.method) {
    case "upvote":
      upvoteGraph(info, callback);
      break;
    case "downvote":
      downvoteGraph(info, callback);
      break;
    case "bookmark":
      bookmarkGraph(info, callback);
      break;
  }
};

function upvoteGraph(info, callback) {
  console.log(info.message);
  Question.find({}, (err, questions) => {
    if (err) {
      callback(err, null);
    } else {
      var answerUpvoteMap = [];
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].answers && questions[i].answers.length > 0) {
          let currentAnswersList = questions[i].answers;
          for (let j = 0; j < currentAnswersList.length; j++) {
            //let answer_id = currentAnswersList[j].answer_id;
            let answerContent = currentAnswersList[j].answerContent;
            if (answerContent != null) {
              answerContent = answerContent.replace(/<\/?.+?>/gi, "");
              if (answerContent == "")
                answerContent = "Preview not available for answer images";
              //answerUpvoteMap.push({"answer_id":answer_id, "upvoteCount":currentAnswersList[j].upvote.length,"answerContent":currentAnswersList[j].answerContent});
              answerUpvoteMap.push({
                answerContent: answerContent,
                upvoteCount: currentAnswersList[j].upvote.length
              });
            } else {
              let answer_id = currentAnswersList[j].answer_id;
              answerUpvoteMap.push({
                answer_id: answer_id,
                upvoteCount: currentAnswersList[j].upvote.length
              });
            }
          }
        }
      }

      answerUpvoteMap.sort((a, b) =>
        a.upvoteCount < b.upvoteCount
          ? 1
          : b.upvoteCount < a.upvoteCount
          ? -1
          : 0
      );
      let topUpvote = answerUpvoteMap.slice(0, 10);
      console.log(topUpvote);

      callback(null, topUpvote);
    }
  });
}

function downvoteGraph(info, callback) {
  console.log(info.message);
  Question.find({}, (err, questions) => {
    if (err) {
      callback(err, null);
    } else {
      var answerDownvoteMap = [];
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].answers && questions[i].answers.length > 0) {
          let currentAnswersList = questions[i].answers;
          for (let j = 0; j < currentAnswersList.length; j++) {
            //let answer_id = currentAnswersList[j].answer_id;
            let answerContent = currentAnswersList[j].answerContent;
            if (answerContent != null) {
              answerContent = answerContent.replace(/<\/?.+?>/gi, "");
              if (answerContent == "")
                answerContent = "Preview not available for answer images";
              answerDownvoteMap.push({
                answerContent: answerContent,
                downvoteCount: currentAnswersList[j].downvote.length
              });
            } else {
              let answer_id = currentAnswersList[j].answer_id;
              answerDownvoteMap.push({
                answer_id: answer_id,
                downvoteCount: currentAnswersList[j].downvote.length
              });
            }
          }
        }
      }
      answerDownvoteMap.sort((a, b) =>
        a.downvoteCount < b.downvoteCount
          ? 1
          : b.downvoteCount < a.downvoteCount
          ? -1
          : 0
      );
      let topDownvote = answerDownvoteMap.slice(0, 10);

      console.log(topDownvote);

      callback(null, topDownvote);
    }
  });
}

function bookmarkGraph(info, callback) {
  console.log(info.message);
  Question.find({}, (err, questions) => {
    if (err) {
      callback(err, null);
    } else {
      var answerBookmarkMap = [];
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].answers && questions[i].answers.length > 0) {
          let currentAnswersList = questions[i].answers;
          for (let j = 0; j < currentAnswersList.length; j++) {
            let answerContent = currentAnswersList[j].answerContent;
            if (answerContent != null) {
              answerContent = answerContent.replace(/<\/?.+?>/gi, "");
              if (answerContent == "")
                answerContent = "Preview not available for answer images";
              answerBookmarkMap.push({
                answerContent: answerContent,
                bookmarkCount: currentAnswersList[j].bookmark.length
              });
            } else {
              let answer_id = currentAnswersList[j].answer_id;
              answerBookmarkMap.push({
                answer_id: answer_id,
                bookmarkCount: currentAnswersList[j].bookmark.length
              });
            }
          }
        }
      }
      answerBookmarkMap.sort((a, b) =>
        a.bookmarkCount < b.bookmarkCount
          ? 1
          : b.bookmarkCount < a.bookmarkCount
          ? -1
          : 0
      );
      let topBookmarks = answerBookmarkMap.slice(0, 10);

      console.log(topBookmarks);

      callback(null, topBookmarks);
    }
  });
}
