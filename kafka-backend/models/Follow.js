const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    follower_email: {
        type: String,
        required: true
    },
    leader_email: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

module.exports = Follow = mongoose.model('follow', FollowSchema)