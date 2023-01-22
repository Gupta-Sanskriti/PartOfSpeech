const { urlencoded } = require('express');
const express = require('express');
const upload = require('./utils/multerUtil')
const readUploadedFile = require('./src/readFile')
const fs = require('fs');
const app = express();
app.use(urlencoded({extended:true}))


app.post("/uploadfile",upload.single('pos_file'), async(req, res)=>{
    let uploadedFile = req.file;
    console.log(uploadedFile)
    res.send(readUploadedFile)
    console.log('Uploaded file')
})

app.get('/readfile', async(req, res)=>{
    const jsondata = JSON.stringify(readUploadedFile)
    console.log(jsondata)
    res.status(200).send({"message":jsondata})
})

// port and listning on port
const port = 8080;
app.listen(port,()=>{console.log(`listing on port : ${port}`)})

  