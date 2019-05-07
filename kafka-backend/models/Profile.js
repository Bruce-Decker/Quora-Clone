const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  isActive: {
    type: Boolean
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  city: {
    type: String
  },
  zip_code: {
    type: String
  },
  state: {
    type: String
  },
  profile_image: {
    type: String,
    required: true,
    default:
      "https://quoraprj2.s3.us-east-2.amazonaws.com/quora%3A%20%201557185409773"
  },
  education: {
    type: String
  },
  career_information: {
    type: String
  },
  description: {
    type: String
  },
  profile_credential: {
    type: String
  },
  topics: [{ type: String }],
  time: {
    type: Date
  },
  views: [
    {
      time: { type: String }
    }
  ],
  followers: [
    {
      email: {
        type: String
      },
      time: {
        type: Date
      }
    }
  ],
  message: [
    {
      sender_email: {
        type: String,
        required: true
      },
      receiver_email: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      isRead: {
        type: Boolean,
        required: true
      },
      time: {
        type: Date,
        required: true
      },
      isDeleted: {
        type: Boolean,
        required: true
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
