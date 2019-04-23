const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip_code: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  profile_image: {
    type: String
  },
  education: {
    type: String,
    required: true
  },
  career_information: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  profile_credential: {
    type: String,
    required: true
  },
  topics: [{ topic_name: { type: String } }],
  time: {
    type: String,
    required: true
  },
  revievedMessage:[
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
            isRead: {
                type: Boolean,
                required: true
            }, 
            time: {
                type: String,
                required: true
            },
            isDeleted: {
                type: Boolean,
                required: true
            }
        }
     ],
     sentMessages:[
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
            isRead: {
                type: Boolean,
                required: true
            }, 
            time: {
                type: String,
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
