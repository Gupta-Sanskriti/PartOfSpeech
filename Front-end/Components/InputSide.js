import React, { ChangeEvent,useEffect, useState } from "react";


const InputSide = () => {
    const [file, setFile] = useState(null);

    

    const handleUploadClick = async() => {
      console.log(file);
      const formData = new FormData();
      formData.append('pos_file', file)

      let res = await fetch('http://localhost:8080/uploadfile', {method:'POST', body:formData}).then(console.log("no data found"));
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