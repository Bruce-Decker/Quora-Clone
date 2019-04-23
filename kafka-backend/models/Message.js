const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var MessageSchema = new Schema({
  messageID: {
    type: String,
    required: true
  },
  messageThread: {
    type: String,
    required: true
  },
  sender_email: {
    type: String,
    required: true
  },
  receiver_email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = Message = mongoose.model("message", MessageSchema);
