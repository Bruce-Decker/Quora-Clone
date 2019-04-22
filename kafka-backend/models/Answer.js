const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1, 1000000);

var AnswerSchema = new Schema({
  answer_id: {
    type: String,
    required: true,
    default: rand
  },
  question_id: {
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
      },
      time: {
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
      },
      time: {
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
      },
      time: {
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
});

module.exports = Answer = mongoose.model("Answer", AnswerSchema);
