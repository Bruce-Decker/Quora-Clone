const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1, 1000000);

const QuestionSchema = new Schema({
  question_id: {
    type: String,
    required: true,
    default: rand
  },
  question: {
    type: String
  },
  topics: [{ type: String }],
  owner: {
    type: String
  },
  followers: [
    {
      email: {
        type: String
      }
    }
  ],
  answers: [
    {
      answer_id: {
        type: String,
        required: true,
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
          type: String
        }
      ],
      downvote: [
        {
          type: String
        }
      ],
      bookmark: [
        {
          email: {
            type: String
          },
          time: {
            type: Date,
            default: new Date()
          }
        }
      ],
      views: {
        type: Number,
        required: true,
        default: 0
      },
      image: {
        type: String
      },
      isAnonymous: {
        type: Boolean,
        default: false
      },
      comments: [
        {
          email: {
            type: String
          },
          name: {
            type: String
          },
          comment: {
            type: String
          },
          time: {
            type: Date
          }
        }
      ],
      answered_time: {
        type: Date,
        required: true,
        default: new Date()
      }
    }
  ],
  postedDate: {
    type: Date
  }
});

QuestionSchema.plugin(mongoosePaginate);
module.exports = Question = mongoose.model("Question", QuestionSchema);
