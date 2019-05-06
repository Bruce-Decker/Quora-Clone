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
const messagesRouter = require("./routes/messages");
const graphRouter=require("./routes/graph")
const questionRouter = require("./routes/question");
const answerRouter = require("./routes/answer");
const contentRouter = require("./routes/content");
const Auth = require("./schema/AuthModel");
var validateRegister = require("./validation/validateRegister");
var validateLogin = require("./validation/validateLogin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var followRouter = require("./routes/follow");

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

app.use("/", authRouter);
app.use("/profile", profileRouter);
app.use("/topic", topicRouter);
app.use("/message", messageRouter);
app.use("/messages", messagesRouter);
app.use("/graph", graphRouter);
app.use("/question", questionRouter);
app.use("/answer", answerRouter);
app.use("/content", contentRouter);
app.use("/follow", followRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
