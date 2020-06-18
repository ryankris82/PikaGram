const express = require("express");
const router = express.Router();

const upload = require('../services/photo-upload');

const singleImageUpload = upload.single('image');

router.post('/image-upload', singleImageUpload, (req, res) => {
 
     return res.json({ 'imageUrl': req.file.location });
  
})


module.exports = router;