import React, {Component} from "react";

class Message extends Component{
    constructor(){
      super()
      this.state ={
        message:'Hello World'
    }
    }
changemessage(){
    this.setState({
        message:'Hello visitor'
    })
}
render() {
    return (
        <>
        <h1>State</h1>
          <p>{this.state.message}</p>
         <button onClick={() => this.changemessage()}>Click Me</button>
        </>
    )
   


}
}

export default Message