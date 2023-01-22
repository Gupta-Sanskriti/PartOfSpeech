import React, { ChangeEvent,useEffect, useState } from "react";


const InputSide = () => {
    const [file, setFile] = useState(null);

    // async function getdata(){
    //     const data = await fetch("");
    //     const json = data.json();
    //     console.log("apidata"+json);
    // }

    // const handleFileChange = (e ) => {
    //     if (e.target.files) {
    //       setFile(e.target.files[0]);
    //     }

    //     console.log(e.target.files)
    //   };
    
    

    const handleUploadClick = async() => {
      console.log(file);
      const formData = new FormData();
      formData.append('pos_file', file)

      let res = await fetch('http://localhost:8080/uploadfile', {method:'POST', body:formData})
      console.log(res)

    };

    return(
        <div>
            <div>
                <input type="file" name="file" id="file" onChange={(e)=>{setFile(e.target.files[0])}} />
                <button type="submit" onClick={
                    handleUploadClick
                }>Submit</button>
            </div>
        </div>
    )
}

export default InputSide;