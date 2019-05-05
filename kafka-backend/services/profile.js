const Profile = require("../models/Profile");
const Auth = require("../models/AuthModel");

exports.profileService = function profileService(info, callback) {
  switch (info.method) {
    case "createProfile":
      createProfile(info, callback);
      break;
    case "viewProfile":
      viewProfile(info, callback);
      break;
    case "deleteProfile":
      deleteProfile(info, callback);
      break;
    case "activate":
      activate(info, callback);
      break;
    case "deactivate":
      deactivate(info, callback);
      break;
    case "isActive":
      isActive(info, callback);
      break;
    case "getImage":
      getImage(info, callback);
      break;
    case "getProfileViews":
    getProfileViews(info, callback);
      break;
      
  }
};

function createProfile(info, callback) {
  var first_name = info.message.first_name;
  var last_name = info.message.last_name;
  var email = info.message.email;
  var city = info.message.city;
  var zip_code = info.message.zip_code;
  var state = info.message.state;
  var profile_image = info.message.profile_image;
  var education = info.message.education;
  var career_information = info.message.career_information;
  var description = info.message.description;
  var profile_credential = info.message.profile_credential;

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
  };
  console.log("aaaaa.........", info.message);

  Profile.findOne({ email: email }, function(err, docs) {
    if (docs) {
      Profile.findOneAndUpdate({ email: email }, data, function(err, result) {
        if (err) {
          //res.send("Fail")
          callback(err, "error");
        } else {
          console.log("in result///////" + result);
          callback(null, data);
        }
      });
    } else {
      console.log(data);
      Profile.create(data, function(err, newlyCreated) {
        if (err) {
          console.log("Error Data");
          callback(err, "error");
        } else {
          callback(null, newlyCreated);
        }
      });
    }
  });
}

function viewProfile(info, callback) {
  var email = info.message.email;
  console.log("view profile", info);
  Profile.find({ email: email }, function(err, docs) {
    if (docs) {
      console.log("view profile", docs);
      updateProfileViews(email);
      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function updateProfileViews(email) {
  var data = {
    time: new Date().toLocaleString()
  };
  Profile.findOneAndUpdate(
    { email: email },
    { $push: { views: data } },
    function(err, docs) {}
  );
}

function deleteProfile(info, callback) {
  var email = info.message.email;
  Profile.findOne({ email: email }, function(err, docs) {
    if (err) {
      console.log(err);
      callback(err, "error");
    } else if (docs) {
      Profile.findOneAndDelete({ email: email }, function(err, result) {
        if (err) {
          //res.send("Fail")
          callback(err, "error");
        } else {
          console.log(result);
        }
      });
      Auth.findOneAndDelete({ email: email }, function(err, result) {
        if (err) {
          //res.send("Fail")
          callback(err, "error");
        } else {
          console.log(result);
        }
      });
      callback(null, "success");
    }
  });
}

function deactivate(info, callback) {
  var email = info.message.email;

  Profile.update({ email: email }, { $set: { isActive: false } }, function(
    err,
    docs
  ) {
    if (err) {
      //res.send("Fail")
      callback(err, "error");
    } else {
      callback(null, docs);
    }
  });
}

function activate(info, callback) {
  var email = info.message.email;

  Profile.update({ email: email }, { $set: { isActive: true } }, function(
    err,
    docs
  ) {
    if (err) {
      //res.send("Fail")
      callback(err, "error");
    } else {
      callback(null, docs);
    }
  });
}

function isActive(info, callback) {
  var email = info.message.email;
  console.log("view profile", info);
  Profile.find({ email: email }, { isActive: 1, _id: 0 }, function(err, docs) {
    if (docs) {
      console.log("is active:", docs);
      callback(null, docs);
    }
  });
}

function getImage(info, callback) {
  var email = info.message.email;
  Profile.find({ email: email }, function(err, docs) {
    if (docs) {
      docs = docs[0];

      console.log(docs);
      callback(null, docs.profile_image);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function getProfileViews(info, callback) {
  var email = info.message.email
  Profile.findOne({email: email}, function(err, docs) {
      
      if (docs) {
          console.log(docs.views);
          let data = {
            email:email,
            count: docs.views.length
          }   
          callback(null, data);
      } else {
          console.log(err);
          callback(err,"error");
      }
  })
}