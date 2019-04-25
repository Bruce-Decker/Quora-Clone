const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question_id: {
    type: String
  },
  question: {
    type: String
  },
  topics: [
    { type: String }
  ],
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
        required: true
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
      bookmark: [{ type: String }],
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
            type: String
          }
        }
      ],
      answered_time: {
        type: String
      }
    }
  ],
  postedDate: {
    type: Date
  }
});

QuestionSchema.plugin(mongoosePaginate);
module.exports = Question = mongoose.model("Question", QuestionSchema);
