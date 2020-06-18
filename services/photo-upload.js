const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { awsConfig } = require('../config');

aws.config.update({
  secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
  accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
  region: awsConfig.AWS_REGION,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "pikagram-pics",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});


module.exports = upload;