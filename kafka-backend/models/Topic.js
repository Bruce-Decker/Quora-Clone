const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  topic_id: {
    type: String
  },
  topic_name: {
    type: String
  },
  followers: [
    {
      email: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Topic = mongoose.model("topic", TopicSchema);
