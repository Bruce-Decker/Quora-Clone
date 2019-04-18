const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answer_id: {
        type: String,
        required: true
    },
    question_id: {
        type: String,
        required: true
    },
    answerContent: {
        type: String,
        required: true
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
        }
     }
    ],
    answered_time: {
        type: String,
        required: true
    }
})

module.exports = Follow = mongoose.model('Answer', AnswerSchema)