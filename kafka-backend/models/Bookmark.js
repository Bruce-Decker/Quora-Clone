const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookMarkSchema = new Schema({
    marker_email: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

module.exports = BookMarkSchema = mongoose.model('bookmark', BookMarkSchema)