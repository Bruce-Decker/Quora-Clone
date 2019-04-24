var redisClient = require("./config/redisClient");
var objectHash = require("object-hash");

module.exports = {
  get: function(opts, cb) {
    let key = objectHash(opts);
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
    let key = objectHash(keyObj);
    redisClient.set(key, objStr, function(err, res) {
      if (err) {
        return cb("Unable to set data in redis");
      }
      return cb();
    });
  }
};
