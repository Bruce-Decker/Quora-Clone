var connection =  new require('./kafka/Connection');

var mongoose = require('mongoose');
const db_url = require('./config/keys').mlab_url
const url = process.env.MONGODB_URI || db_url
const url2 = "mongodb://localhost:27017/Quora_Clone"
mongoose.connect(url2, { useNewUrlParser : true })
     .then(() => console.log("Mongo Database is alive"))
     .catch(err => console.log(err))

//Services
var auth = require('./services/authentication')



function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        console.log("Sdfsdf  " + topic_name)
        switch (topic_name) {

            case 'auth':
                auth.authService(data.data, function(err, res) {
                    response(data, res, producer)
                    return
                })
                break
        }
        
        
    });
}

function response(data, res, producer) {
    console.log('after handle', res);
    var payloads = [
        { topic: data.replyTo,
            messages:JSON.stringify({
                correlationId:data.correlationId,
                data : res
            }),
            partition : 0
        }
    ];
    producer.send(payloads, function(err, data){
        console.log('producer send', data);
    });
    return;
}


handleTopicRequest("auth", auth)


