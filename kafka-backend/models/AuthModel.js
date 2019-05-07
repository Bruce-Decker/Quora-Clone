const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AuthSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isDeleted: {
    type: String,
    default: false
  },
  isDeactivated: {
    type: String,
    default: false
  }
});

module.exports = Auth = mongoose.model("auth", AuthSchema);
