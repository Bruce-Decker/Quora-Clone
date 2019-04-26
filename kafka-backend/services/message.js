const Profile = require('../models/Profile')


exports.messageService = function messageService(info, callback) { 
    switch(info.method) {
        case "sendMessage":
            createMessage(info, callback)
            break;  
        case "inbox":
            viewMessage(info, callback)  
            break;
    }
}

function createMessage(info, callback) {
    console.log(`info`);
    console.log(info);
    var message = info.body.message;
    var sender_email =  info.body.sender_email
    var receiver_email = info.body.receiver_email
    var isRead = false;
    var time = new Date().toLocaleString();
    var isDeleted = false;
    var data = {
        message, 
        sender_email,
        receiver_email,
        isRead,
        time,
        isDeleted
    }
    Profile.findOneAndUpdate({email: sender_email}, {message:data}, function(err, result) {
        if (err) {
            callback(err,"error");
        } else {
            console.log(result);
        Profile.findOneAndUpdate({email: receiver_email}, {message:data}, function(error, resultdata) {
            if (error) {
                callback(error,"error");
            } else {
                callback(null, data);
            }
        })
        }
    })
}

function viewMessage(info, callback) {
    console.log(info);
    let data = [];
    callback(null, data);
}