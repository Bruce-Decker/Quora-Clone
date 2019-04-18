var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport')
const morgan = require('morgan')
const cors = require('cors')
var kafka = require('./kafka/client')
const authRouter = require('./routes/authentication')
const profileRouter = require('./routes/userProfile')

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/Quora_Clone"


app.use(cors())
app.use(morgan('dev'))
app.use(passport.initialize());
require('./config/passport')(passport);


mongoose.connect(url, { useNewUrlParser : true })
     .then(() => console.log("Mongo Database is alive"))
     .catch(err => console.log(err))
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use(passport.initialize());


app.use('/', authRouter)
app.use('/profile', profileRouter)

app.post('/test', function(req, res) {
    res.send("test")
})


app.listen(port, () => console.log(`Server running on port ${port}`));