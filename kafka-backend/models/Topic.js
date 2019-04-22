const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TopicSchema = new Schema({
  topic_id: {
    type: String
  },
  topic_name: {
    type: String
  }
});

module.exports = Topic = mongoose.model("topic", TopicSchema);
