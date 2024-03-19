import React, {Component} from "react";

class EventBind extends Component{
   constructor(){
    super()
    this.state = {
        message: 'Hello'
    }
    // this.clicked = this.clicked.bind(this);
  
   }
   
//    clicked(){
//     this.setState({
//         message: 'Good bye'
//     })
//     console.log(this);
//    }
clicked = () => { 
        this.setState({
    message: 'Good bye'
})
} 
render() {
     return (
        <>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clicked.bind(this)}>CLick me from class</button>
        <button onClick={() => this.clicked()}>CLick me arrow func</button> */}
        <button onClick={this.clicked}>CLick me arrow func</button>
        </>
    )
}
}

export default EventBind