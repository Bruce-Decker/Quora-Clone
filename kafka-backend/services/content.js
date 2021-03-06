var AnswerModel = require("../models/Answer");
//var BookmarkModel = require("../models/Bookmark");
//var ProfileModel = require("../models/Profile");
var QuestionModel = require("../models/Question");
var followersModel = require("../models/UserFollowers");
var sortBy = require("lodash.sortby");

exports.contentService = function contentService(info, callback) {
  switch (info.method) {
    case "content":
      content(info, callback);
      break;
    case "filteredContent":
      filteredContent(info, callback);
      break;
  }
};

function contentAll(info, callback) {
  var response = {};
  var answerAns = [];

  var email = info.message.email;
  var order = Number(info.message.order ? info.message.order : -1);
  var start, end;
  var year = info.message.year;

  if (year) {
    start = new Date(`${year}-01-01`);
    end = new Date(`${Number(year) + 1}-01-01`);
  } else {
    start = new Date(`2000-01-01`);
    end = new Date(`2030-01-01`);
  }
  console.log("start=", start, "end=", end);

  console.log("info", info);

  /*   QuestionModel.aggregate(
    [
      { $unwind: "$followers" },
      { $unwind: "$answers" },

      {
        $match: {
          $or: [
            {
              "followers.email": email
            },
            {
              owner: email
            },
            {
              "answers.owner": email
            }
          ]
        }
      },

      { $sort: { "followers.time": order } }
      //{ $project: { question: 1, "followers.time": 1, question_id: 1 } }
    ],
    //{ sort: { "followers.time": order } },
    function(err, docs) {
      if (docs) {
        console.log(docs);
        callback(null, docs);
      } else {
        console.log(err);
        callback(err, " Question Followed error");
      }
    }
  ); */
  QuestionModel.aggregate(
    [
      { $unwind: "$answers" },
      { $unwind: "$answers.bookmark" },
      /*  {
        $match: {
          "answers.bookmark.email": email
        }
      }, */

      {
        $match: {
          $and: [
            {
              "answers.bookmark.email": email
            },

            {
              "answers.bookmark.time": { $gte: start }
            },
            {
              "answers.bookmark.time": { $lt: end }
            }
          ]
        }
      },

      { $sort: { "answers.bookmark.time": order } },
      {
        $project: {
          question: 1,
          "answers.answerContent": 1,
          question_id: 1,
          "answers.answer_id": 1,
          "answers.bookmark.time": 1
        }
      }
    ],
    function(err, docs) {
      if (docs) {
        docs.map(element => {
          let temp = {};
          temp.time = element.answers.bookmark.time;
          temp.question_id = element.question_id;
          temp.answer_id = element.answers.answer_id;
          temp.question = element.question;
          temp.type = "Bookmark";
          temp.answer = element.answers.answerContent;
          answerAns.push(temp);
        });
      } else {
        console.log(err);
        callback(err, " Answers error");
      }
    }
  );
  QuestionModel.find(
    {
      $and: [
        {
          owner: email
        },

        {
          postedDate: { $gte: start }
        },
        {
          postedDate: { $lt: end }
        }
      ]
    },
    { question_id: 1, question: 1, postedDate: 1 },
    { sort: { postedDate: order } },

    function(err, docs) {
      if (docs) {
        console.log("docs", docs);
        docs.map(element => {
          let temp = {};
          temp.time = element.postedDate;
          temp.question_id = element.question_id;
          temp.type = "QuestionAsked";
          temp.question = element.question;
          answerAns.push(temp);
        });
        console.log("answersAns", answerAns);

        response.QuestionsAsked = docs;
        QuestionModel.aggregate(
          [
            { $unwind: "$answers" },
            {
              $match: {
                $and: [
                  {
                    "answers.owner": email
                  },

                  {
                    "answers.answered_time": { $gte: start }
                  },
                  {
                    "answers.answered_time": { $lt: end }
                  }
                ]
              }
            },

            { $sort: { "answers.answered_time": order } },
            {
              $project: {
                question: 1,
                "answers.answered_time": 1,
                question_id: 1
              }
            }
          ],
          function(err, docs) {
            if (docs) {
              docs.map(element => {
                let temp = {};
                temp.time = element.answers.answered_time;
                temp.question_id = element.question_id;
                temp.type = "Answer";
                temp.question = element.question;
                answerAns.push(temp);
              });
              response.Answers = docs;

              QuestionModel.aggregate(
                [
                  { $unwind: "$followers" },
                  {
                    $match: {
                      $and: [
                        {
                          "followers.email": email
                        },
                        {
                          "followers.time": { $gte: start }
                        },
                        {
                          "followers.time": { $lt: end }
                        }
                      ]
                    }
                  },

                  { $sort: { "followers.time": order } },
                  {
                    $project: {
                      question: 1,
                      "followers.time": 1,
                      question_id: 1
                    }
                  }
                ],
                function(err, docs) {
                  if (docs) {
                    console.log(docs);
                    response.QuestionsFollowed = docs;
                    docs.map(element => {
                      let temp = {};
                      temp.time = element.followers.time;
                      temp.question_id = element.question_id;
                      temp.type = "QuestionFollowed";
                      temp.question = element.question;
                      answerAns.push(temp);
                    });
                    console.log("answersAns", answerAns);
                    if (order == 1) {
                      callback(null, sortBy(answerAns, ["time"]));
                    } else {
                      callback(null, sortBy(answerAns, ["time"]).reverse());
                    }
                  } else {
                    console.log(err);
                    callback(err, " Question followed error");
                  }
                }
              );
            } else {
              console.log(err);
              callback(err, " Answered error");
            }
          }
        );
      } else {
        console.log(err);
        callback(err, " Question error");
      }
    }
  );
}

function content(info, callback) {
  var answerAns = [];
  console.log("filteredContent in Kafka");
  var email = info.message.email;
  var activityType = info.message.activityType;
  var year = info.message.year;
  console.log("year", year);
  var order = Number(info.message.order ? info.message.order : -1);
  console.log("order", order);

  var start, end;
  if (year) {
    start = new Date(`${year}-01-01`);
    end = new Date(`${Number(year) + 1}-01-01`);
  } else {
    start = new Date(`2000-01-01`);
    end = new Date(`2030-01-01`);
  }
  console.log("start=", start, "end=", end);
  console.log(info);
  switch (activityType) {
    case "Bookmarks":
      QuestionModel.aggregate(
        [
          { $unwind: "$answers" },
          { $unwind: "$answers.bookmark" },
          /*  {
            $match: {
              "answers.bookmark.email": email
            }
          }, */

          {
            $match: {
              $and: [
                {
                  "answers.bookmark.email": email
                },

                {
                  "answers.bookmark.time": { $gte: start }
                },
                {
                  "answers.bookmark.time": { $lt: end }
                }
              ]
            }
          },

          { $sort: { "answers.bookmark.time": order } },
          {
            $project: {
              question: 1,
              "answers.answerContent": 1,
              question_id: 1,
              "answers.answer_id": 1,
              "answers.bookmark.time": 1
            }
          }
        ],
        function(err, docs) {
          if (docs) {
            docs.map(element => {
              let temp = {};
              temp.time = element.answers.bookmark.time;
              temp.question_id = element.question_id;
              temp.answer_id = element.answers.answer_id;
              temp.question = element.question;
              temp.type = "Bookmark";
              temp.answer = element.answers.answerContent;
              answerAns.push(temp);
            });
            console.log(docs);
            callback(null, answerAns);
          } else {
            console.log(err);
            callback(err, " Answers error");
          }
        }
      );
      break;

    case "QuestionAsked":
      QuestionModel.find(
        {
          $and: [
            {
              owner: email
            },

            {
              postedDate: { $gte: start }
            },
            {
              postedDate: { $lt: end }
            }
          ]
        },
        { question_id: 1, question: 1, postedDate: 1 },
        { sort: { postedDate: order } },
        function(err, docs) {
          if (docs) {
            docs.map(element => {
              let temp = {};
              temp.time = element.postedDate;
              temp.question_id = element.question_id;
              temp.type = "QuestionAsked";
              temp.question = element.question;
              answerAns.push(temp);
            });
            console.log(docs);
            callback(null, answerAns);
          } else {
            console.log(err);
            callback(err, " Question Asked error");
          }
        }
      );
      break;
    case "QuestionFollowed":
      /* QuestionModel.find(
        {
          followers: {
            $elemMatch: { email: email, time: { $gte: start, $lte: end } }
          }
        },
        {
          question_id: 1,
          question: 1,
          followers: {
            $elemMatch: { email: email, time: { $gte: start, $lte: end } }
          }
        }, */
      QuestionModel.aggregate(
        [
          { $unwind: "$followers" },
          {
            $match: {
              $and: [
                {
                  "followers.email": email
                },
                {
                  "followers.time": { $gte: start }
                },
                {
                  "followers.time": { $lt: end }
                }
              ]
            }
          },

          // { $sort: { "followers.time": order } },
          { $project: { question: 1, "followers.time": 1, question_id: 1 } }
        ],
        //{ sort: { "followers.time": order } },
        function(err, docs) {
          if (docs) {
            console.log(docs);
            docs.map(element => {
              let temp = {};
              temp.time = element.followers.time;
              temp.question_id = element.question_id;
              temp.type = "QuestionFollowed";
              temp.question = element.question;
              answerAns.push(temp);
            });
            callback(null, answerAns);
          } else {
            console.log(err);
            callback(err, " Question Followed error");
          }
        }
      );
      break;
    case "Answers":
      /*       QuestionModel.find(
        {
          answers: {
            $elemMatch: {
              owner: email,
              answered_time: { $gte: start, $lte: end }
            }
          }
        },
        {
          question_id: 1,
          question: 1,
          answers: {
            $elemMatch: {
              owner: email,
              answered_time: { $gte: start, $lte: end }
            }
          },
          "answers.answered_time": 1,
          "answers.answer_id": 1,
          "answers.answerContent": 1,
          "answers.owner": 1,
          "answers._id": 1
        },
        { sort: { "answers.answered_time": order } }, */
      QuestionModel.aggregate(
        [
          { $unwind: "$answers" },
          {
            $match: {
              $and: [
                {
                  "answers.owner": email
                },

                {
                  "answers.answered_time": { $gte: start }
                },
                {
                  "answers.answered_time": { $lt: end }
                }
              ]
            }
          },

          { $sort: { "answers.answered_time": order } },
          {
            $project: {
              question: 1,
              "answers.answered_time": 1,
              question_id: 1
            }
          }
        ],
        function(err, docs) {
          if (docs) {
            docs.map(element => {
              let temp = {};
              temp.time = element.answers.answered_time;
              temp.question_id = element.question_id;
              temp.type = "Answer";
              temp.question = element.question;
              answerAns.push(temp);
            });
            console.log(docs);
            callback(null, answerAns);
          } else {
            console.log(err);
            callback(err, " Answers error");
          }
        }
      );
      break;
    case "All":
      contentAll(info, callback);
      break;
    default:
      contentAll(info, callback);
  }
}
