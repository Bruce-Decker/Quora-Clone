const Profile = require('../models/Profile')


exports.profileService = function profileService(info, callback) { 
    switch(info.method) {
        case "createProfile":
            createProfile(info, callback)
            break   
        case "viewProfile":
            viewProfile(info, callback)  
            break      
    }
}


function createProfile(info, callback) {
   var first_name = info.message.first_name
   var last_name =  info.message.last_name
   var email = info.message.email
   var city = info.message.city
   var zip_code = info.message.zip_code
   var state = info.message.state
   var profile_image = info.message.profile_image
   var education = info.message.education
   var career_information = info.message.career_information
   var description = info.message.description
   var profile_credential = info.message.profile_credential

   var data = {
       first_name, 
       last_name,
       email,
       city,
       zip_code,
       state,
       profile_image,
       education,
       career_information,
       description,
       profile_credential
   }
   console.log("A32fds")
   console.log(data)

   Profile.findOne({email: email}, function(err, docs) {
    if (docs) {
        Profile.findOneAndUpdate({email: email}, data, function(err, result) {
             if (err) {
                 //res.send("Fail")
                 callback(err,"error");
             } else {
                 console.log(result)
                 callback(null, data);
              }
        })
    } else {
           console.log(data)
            Profile.create(data, function(err, newlyCreated) {
                if (err) {
                    console.log("Error Data");
                    callback(err,"error");
                } else {
                    callback(null, newlyCreated);
                }
           })

    }

})
}


function viewProfile(info, callback){
    var email = info.message.email
    console.log(info)
    Profile.find({email: email}, function(err, docs) {
        
        if (docs) {
            console.log(docs)
            callback(null, docs);
        } else {
            console.log(err)
            callback(err,"error");
        }
    })
}