const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const Auth = require('../models/AuthModel')
var validateRegister = require('../validation/validateRegister')
var validateLogin = require('../validation/validateLogin')


exports.authService = function authService(info, callback) {
    console.log("Path is ")
   
    switch(info.method) {
        case "register":
            post_createBasic(info, callback)
            break
        case 'login':
            login(info, callback)
            break
      
             
    }
}


function login(info, callback) {
    const { errors, isValid } = validateLogin(info.body);

    if (!isValid) {
      //return res.status(400).json(errors);
       callback(null, {errors: errors})
    }
  
    const email = info.body.email;
    const password = info.body.password;

    Auth.findOne({ email }).then(user => {

      if (!user) {
        errors.email = 'User not found';
        //return res.status(404).json(errors);
        callback(null, {errors: errors})
      }
      bcrypt.compare(password, user.password)
      .then(isMatch => {

          if(isMatch) {

              const payload = { id: user.id, email: user.email, name: user.name} //Create JWT payload
              console.log(payload)
              jwt.sign(
                  payload, 
                  'secret', 
                  { expiresIn: 3600 }, 
                  (err, token) => {
                  
                    callback(null, {success: true, token: 'Bearer ' + token})
              });
          } else {
              errors.password = 'Password incorrect'
              //return res.status(400).json(errors)
              callback(null, {errors: errors})
          }
      })
})
}


function post_createBasic(info, callback){
   
    const { errors, isValid } = validateRegister(info.body);
    if (!isValid) {
      
       
        callback(null, {errors: errors})
    }

    Auth.findOne({ email: info.body.email }).then(user => {
        if (user) {
            console.log("Email already exists")
            errors.email = "Email already exists"
            callback(null, {errors: errors})
        } else {
            const new_user = new Auth({
                name: info.body.name,
                email: info.body.email,
                password: info.body.password
            })

            bcrypt.genSalt(10, (err, salt) => {
                console.log(new_user.password)
                bcrypt.hash(new_user.password, salt, (err, hash) => {
                    if (err) throw err;
                    new_user.password = hash;
                    new_user.save()
                         .then(user => {
                           const payload = { id: user.id, email: user.email, name: user.name}
                           jwt.sign(
                               payload, 
                               'secret', 
                               { expiresIn: 3600 }, 
                               (err, token) => {
                                //  res.json({
                                //      success: true,
                                //      token: 'Bearer ' + token
                                //  })
                                callback(null, {success: true, token: 'Bearer ' + token})
                           });
                         })
                         .catch(err => console.log(err))
                })
            })
        }
   })
}