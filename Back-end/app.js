const { urlencoded } = require('express');
const express = require('express');
const upload = require('./utils/multerUtil')
const fs = require('fs');

const app = express();
app.use(urlencoded({extended:true}))

const moveUploadedFile = async(source) => {
    try{
        await fs.rename(source, '/Users/lt/Desktop/personalProject/Parts_of_speech_detector/Back-end/download');
        console.log(`Moved file from ${source} to destination`);
    }catch(e){
        console.log(e)
    }
}

app.post("/uploadfile",upload.single('pos_file'), async(req, res)=>{
    console.log(await req.body)
    console.log(upload)

    // let file = await req.body;
    // console.log('file:'+file);
    // console.log(moveUploadedFile(file));
    res.send(req.body)
})




// port and listning on port
const port = 8080;
app.listen(port,()=>{console.log(`listing on port : ${port}`)})
