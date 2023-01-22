import React, { useEffect, useState } from "react";

const OutputSide = () => {
    const [optData, setOptData] =useState("");

    async function getOutputData(){
        const data = await fetch("http://localhost:8080/readfile");
        const json = await data.json();

        setOptData(json.message)
    }

    useEffect(()=>{
        getOutputData();

        return ()=>{
            
        }
    }, [optData])

    return (
        <h1>{optData}</h1>
    )
}

export default OutputSide;