const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1, 1000000);

var QuestionSchema = new Schema({
  question_id: {
    type: String
  },
  question: {
    type: String
  },
  topics: [{ topic_name: { type: String } }],
  owner: {
    type: String
  },
  followers: [
    {
      email: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      }
    }
  ],
  answers: [
    {
      answer_id: {
        type: String,
        default: rand
      },
      answerContent: {
        type: String,
        required: true
      },
      owner: {
        type: String
      },
      upvote: [
        {
          email: {
            type: String
          }
        }
      ],
      downvote: [
        {
          email: {
            type: String
          }
        }
      ],
      bookmark: [
        {
          email: {
            type: String
          }
        }
      ],
      image: {
        type: String
      },
      isAnonymous: {
        type: Boolean
      },
      comments: [
        {
          email: {
            type: String
          },
          comment: {
            type: String
          },
          time: {
            type: String,
            required: true
          }
        }
      ],
      answered_time: {
        type: String,
        required: true
      }
    }
  ],
  postedDate: {
    type: Date,
    required: true
  }
});

QuestionSchema.plugin(mongoosePaginate);
module.exports = Question = mongoose.model("Question", QuestionSchema);
