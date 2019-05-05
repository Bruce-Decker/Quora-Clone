var redis = require("redis");
var client = redis.createClient({
  host: "ec2-18-188-172-229.us-east-2.compute.amazonaws.com",
  port: 6379
});

client.on("connect", function() {
  console.log("Redis client connected");
});

client.on("error", function(err) {
  console.log("Something went wrong " + err);
});
module.exports = client;
