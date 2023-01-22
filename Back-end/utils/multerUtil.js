const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'/Users/lt/Desktop/personalProject/Parts_of_speech_detector/Back-end/download')
    },
    filename: function(req, file, cb){
        console.log(file)
        cb(null, file.originalname )
    }
})

const upload = multer({storage:storage})

module.exports = upload;