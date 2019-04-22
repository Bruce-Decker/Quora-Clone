var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
var kafka = require("./kafka/client");
const authRouter = require("./routes/authentication");
const profileRouter = require("./routes/userProfile");
const topicRouter = require("./routes/topic");
const messageRouter = require("./routes/message");
const questionRouter = require("./routes/question");
const Auth = require("./schema/AuthModel");
var validateRegister = require("./validation/validateRegister");
var validateLogin = require("./validation/validateLogin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db_url = require("./config/keys").mongo_atlas;
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/Quora_Clone";

app.use(cors());
app.use(morgan("dev"));
app.use(passport.initialize());
require("./config/passport")(passport);

mongoose
  .connect(db_url, { useNewUrlParser: true })
  .then(() => console.log("Mongo Database is alive"))
  .catch(err => console.log(err));
const port = 5000;

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(passport.initialize());

// app.post('/register', function(req, res) {
//     console.log(req.body)

//     const { errors, isValid } = validateRegister(req.body);
//     if (!isValid) {

//         res.send({errors: errors})
//     }

//     Auth.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             console.log("Email already exists")
//             errors.email = "Email already exists"
//             res.send({errors: errors})
//         } else {
//             const new_user = new Auth({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             })

//             bcrypt.genSalt(10, (err, salt) => {
//                 console.log(new_user.password)
//                 bcrypt.hash(new_user.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     new_user.password = hash;
//                     new_user.save()
//                          .then(user => {
//                            const payload = { id: user.id, email: user.email, name: user.name}
//                            jwt.sign(
//                                payload,
//                                'secret',
//                                { expiresIn: 3600 },
//                                (err, token) => {
//                                 //  res.json({
//                                 //      success: true,
//                                 //      token: 'Bearer ' + token
//                                 //  })
//                                res.send({success: true, token: 'Bearer ' + token})
//                            });
//                          })
//                          .catch(err => console.log(err))
//                 })
//             })
//         }
//    })

// })

app.use("/", authRouter);
app.use("/profile", profileRouter);
app.use("/topic", topicRouter);
app.use("/message",messageRouter);
app.use("/question", questionRouter);

app.post("/test", function(req, res) {
  res.send("test");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
