import React, {Component} from "react";

class ClassClick extends Component{
     clicked() {
    console.log("Button clicked");
}
render() {
     return (
        <>
        <button onClick={this.clicked}>CLick me from class</button>
        </>
    )
   


}
}

export default ClassClick