const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

aws.config.update({
  secretAccessKey: "5CNt5UwXORAn+p7EMOP2Gx97cAD6AZVrF9xKxQwG",
  accessKeyId: "AKIAIQUYHKBS77MAD34A",
  region: "us-east-2"
});
//aa

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "quoraprj2",
    //acl: "public-read-write	",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "Hello" });
    },
    key: function(req, file, cb) {
      cb(null, "quora:  " + Date.now().toString());
    }
  })
});

module.exports = upload;
