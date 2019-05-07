const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Auth = require("../models/AuthModel");
var validateRegister = require("../validation/validateRegister");
var validateLogin = require("../validation/validateLogin");
const Profile = require("../models/Profile");
var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 500,
  host: "localhost",
  user: "root",
  password: "root",
  database: "Quora_Clone",
  multipleStatements: true
});

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Quora_Clone",
  multipleStatements: true
});

var db_config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "Quora_Clone",
  multipleStatements: true
};

var connection;

exports.authService = function authService(info, callback) {
  console.log("Path is ");

  switch (info.method) {
    case "register":
      post_createBasic(info, callback);
      break;
    case "login":
      login(info, callback);
      break;
    case "search":
      search(info, callback);
      break;
  }
};

function search(info, callback) {
  var name = info.message.name;
  console.log("search user", info);
  Auth.find({ name: new RegExp(name, "i") }, function(err, docs) {
    if (docs) {
      console.log("search user", docs);

      callback(null, docs);
    } else {
      console.log(err);
      callback(err, "error");
    }
  });
}

function login(info, callback) {
  const { errors, isValid } = validateLogin(info.body);

  if (!isValid) {
    //return res.status(400).json(errors);
    callback(null, { errors: errors });
  }

  const email = info.body.email;
  const password = info.body.password;

  Auth.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      //return res.status(404).json(errors);
      callback(null, { errors: errors });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email, name: user.name }; //Create JWT payload
        console.log(payload);
        jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
          callback(null, { success: true, token: "Bearer " + token });
        });
      } else {
        errors.password = "Password incorrect";
        //return res.status(400).json(errors)
        callback(null, { errors: errors });
      }
    });
  });
}

function post_createBasic(info, callback) {
  const { errors, isValid } = validateRegister(info.body);
  if (!isValid) {
    callback(null, { errors: errors });
  }

  Auth.findOne({ email: info.body.email }).then(user => {
    if (user) {
      console.log("Email already exists");
      errors.email = "Email already exists";
      callback(null, { errors: errors });
    } else {
      const new_user = new Auth({
        name: info.body.name,
        email: info.body.email,
        password: info.body.password
      });
      const splitName = info.body.name.split(/(\s+)/);
      const firstName = splitName[0];
      const lastName = splitName[2];

      const user_profile = new Profile({
        first_name: firstName,
        last_name: lastName,
        email: info.body.email
      });
      bcrypt.genSalt(10, (err, salt) => {
        console.log(new_user.password);
        bcrypt.hash(new_user.password, salt, (err, hash) => {
          if (err) throw err;
          new_user.password = hash;
          new_user
            .save()
            .then(user => {
              const payload = {
                id: user.id,
                email: user.email,
                name: user.name
              };
              jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
                //  res.json({
                //      success: true,
                //      token: 'Bearer ' + token
                //  })
                callback(null, { success: true, token: "Bearer " + token });
              });
            })
            .catch(err => console.log(err));
          user_profile.save().then(user => {
            console.log("Profile created" + user);
          });
        });
      });
    }
  });
}

// function login(info, callback) {
//     var data = {
//         email: info.body.email,
//         password: info.body.password
//     }
//     const { errors, isValid } = validateLogin(data)
//     if (!isValid) {
//         //return res.status(400).json(errors);
//         callback(null, {errors: errors})
//         return
//     }

//     var email = info.body.email
//     var password = info.body.password
//     console.log(email)
//     console.log("sdfsf " + password)

//     pool.getConnection(function(err,connection){
//         if (err) {
//             // res.json({"code" : 100, "status" : "Error in connection database"});
//             // return;
//             callback(null, {errors: err})
//           }
//         connection.query('SELECT * FROM Auth where email =?', email, function(err, result) {
//         if (err) {
//             //return res.status(404).json(err)
//             callback(null, {errors: err})
//         }
//         if (result) {
//         if (result.length == 0) {
//             errors.email = 'User not found'

//             //return res.status(404).json(errors)

//             callback(null, {errors: errors})
//             return
//         }
//     }

//     console.log(result)

//         bcrypt.compare(password, result[0].password)
//                 .then(isMatch => {
//                     if(isMatch) {

//                         const payload = { email: result[0].email, name: result[0].name} //Create JWT payload
//                         jwt.sign(
//                             payload,
//                             'secret',
//                             { expiresIn: 3600 },
//                             (err, token) => {
//                                 res.json({
//                                     success: true,
//                                     token: 'Bearer ' + token
//                                 })
//                         });
//                     } else {

//                        // return res.status(400).json('Password incorrect')
//                        callback(null, {errors: errors})
//                     }
//             })

//         })
//         connection.release()
//     })

// }

// function post_createBasic(info, callback){
//     const { errors, isValid } = validateRegister(info.body);
//     if (!isValid) {
//         //return res.status(400).json(errors);
//         callback(null, {errors: errors})

//     }

//      var name = info.body.name;
//      var email = info.body.email;
//      var password = info.body.password;
//      var user = {name: name, email: email, password: password}
//      pool.getConnection(function(err,connection){
//         if (err) {
//             // res.json({"code" : 100, "status" : "Error in connection database"});
//             // return;
//             callback(null, {errors: err})

//           }

//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(user.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     user.password = hash;
//                     var sql = 'INSERT INTO Auth SET ?  ON DUPLICATE KEY UPDATE name = VALUES(name), email = VALUES(email), password = VALUES(password)'
//                 let query = connection.query(sql, user, (err, result) => {
//                 if(err) {
//                     if(err.errno==1062){
//                         //res.send('dubplicated key')
//                         callback(null, {errors: 'dubplicated key'})

//                     }
//                     //res.send('error')
//                     callback(null, {errors: 'error'})

//                 } else {
//                     console.log('added one user');
//                     console.log(result)
//                     const payload = { email: user.email, name: user.name}
//                     console.log(payload)
//                     jwt.sign(
//                         payload,
//                         'secret',
//                         { expiresIn: 3600 },
//                         (err, token) => {
//                             // res.json({
//                             //     success: true,
//                             //     token: 'Bearer ' + token
//                             // })
//                             console.log(token)
//                             callback(null, {success: true, token: 'Bearer ' + token})

//                     });

//                     //res.json(user)

//                 }
//             });
//         })
//         })
//         connection.release()
//     })

// }
