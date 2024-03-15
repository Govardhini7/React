import React, {Component} from "react";

class Welcome extends Component{

render() {
    const {name, age} = this.props
    return (
        <>
        <h1></h1>
        {/* <h2>Welcome {this.props.name} {this.props.age}</h2> */}
        <h2>Welcome {name} {age}</h2>
        <h3>{this.props.children}</h3>
        </>
    )
   


}
}

export default Welcome