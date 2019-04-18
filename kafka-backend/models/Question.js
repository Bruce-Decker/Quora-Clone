const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question_id: {
        type: String,
    },
    topic: {
        type: String,
    },
    owner: {
        type: String,
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
            email: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            },
            time: {
                type: String,
                required: true
            }
        }
    ],
    postedDate: {
        type: String,
        required: true
    }
})

module.exports = Question = mongoose.model('Question', QuestionSchema)