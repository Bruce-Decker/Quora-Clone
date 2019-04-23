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
  topics: [{ topic_name: { type: String } }],
  owner: {
    type: String
  },
  followers: [
    {
      email: {
        type: String,
        required: true
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
          email: {
            type: String,
            required: true
          }
        }
      ],
      downvote: [
        {
          email: {
            type: String,
            required: true
          }
        }
      ],
      bookmark: [
        {
          email: {
            type: String,
            required: true
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
            type: String,
            required: true
          },
          comment: {
            type: String,
            required: true
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
    type: String,
    required: true
  }
});

QuestionSchema.plugin(mongoosePaginate);
module.exports = Question = mongoose.model("Question", QuestionSchema);
