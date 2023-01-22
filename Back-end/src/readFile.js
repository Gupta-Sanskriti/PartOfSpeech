const fs = require('fs');
// reading from file
const fileinfo = fs.readFileSync('example.txt', (err, data) => {
    if (err) throw err;
    return data
}).toString();

export default fileinfo;