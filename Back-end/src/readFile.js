const fs = require('fs');
// reading from file
const fileinfo = fs.readFileSync('/Users/lt/Desktop/personalProject/Parts_of_speech_detector/Back-end/download/example.txt', async(err, data) => {
    if (err) throw err;
    return await data
}).toString();


module.exports = fileinfo;