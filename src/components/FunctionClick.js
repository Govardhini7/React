import React, {Component} from "react";

function FunctionClick(){
    function clicked(){
        console.log("Button clicked")
    }
    return(
        <div>
            <button onClick={clicked}>Click ME</button>
        </div>
    )
}

export default FunctionClick