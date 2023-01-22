import React, { useEffect, useState } from "react";


const InputSide = () => {
    const [file, setfile] = useState();
    // let data = document.getElementById("file").files[0];
    // let entry = document.getElementById("file").files[0];
    // console.log('doupload',entry,data)
    // fetch('uploads/' + encodeURIComponent(entry.name), {method:'PUT',body:data});
    // alert('your file has been uploaded');
    // location.reload();
    async function getdata(){
        const data = await fetch("http://localhost:8080/uploadfile");
        const json = data.json();
        console.log("apidata"+json);
    }

    useEffect(()=>{
        getdata()
    }, [file])

    return(
        <div>
            <form>
                <input type="file" name="file" id="file" />
                <button type="submit" onClick={(e)=>{
                    let data = document.getElementById("file").files[0];
                    fetch('http://localhost:8080/uploadfile' + encodeURIComponent(entry.name), {method:'PUT',body:data});

                    
                    e.preventDefault();
                }}>Submit</button>
            </form>
        </div>
    )
}

export default InputSide;