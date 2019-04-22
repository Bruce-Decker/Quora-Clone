const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
     first_name: {
         type: String
     },
     last_name: {
         type: String
     },
     email: {
         type: String,
         required: true
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
         type: String
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
            },
            isDeleted: {
                type: Boolean,
                required: true
            }
        }
     ]
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)