var redisClient = require("./config/redisClient");
//var objectHash = require("object-hash");

module.exports = {
  get: function(opts, cb) {
    let key = "A"; //objectHash(opts);
    redisClient.get(key, function(err, res) {
      if (!err && res) {
        res = JSON.parse(res);
        return cb(null, res);
      } else {
        return cb("Unable to get data from redis");
      }
    });
  },

  set: function(opts) {
    let keyObj = opts.keyObj;
    let objStr = JSON.stringify(opts.value);
    let key = "a"; //objectHash(keyObj);
    redisClient.set(key, objStr, function(err, res) {
      console.log(err);
    });
  }
};
