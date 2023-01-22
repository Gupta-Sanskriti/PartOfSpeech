import React from "react";
import ReactDOM from "react-dom/client";
import InputSide from "./Components/InputSide";
import OutputSide from "./Components/OutputSide";

const AppLayout = () =>{
    return(
        <>
            <InputSide />
            <OutputSide />
        </>
    )
}
console.log(AppLayout())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

