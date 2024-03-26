import React, {Component} from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycle extends Component{
    constructor(){
      super()
      this.state ={
        message:'Hello World'
    }
    console.log("A Constructor");
    }
static getDerivedStateFromProps(props, state)
{
    console.log("A Derived State from props")
    return null
}
componentDidMount(){
    console.log("A component did mount")
}
shouldComponentUpdate(){
    console.log("A should component update")
    return true
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("A get snapshot before update")
    return null
}
componentDidUpdate(){
    console.log("A component did update")
}
changeState = () => {
    this.setState({
        message : 'Hello from changed state'
    })
}
render() {
    console.log("A Render")
    return (
        <>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>change state</button>
        <LifeCycleB />
        </>
    )
}
}
export default LifeCycle