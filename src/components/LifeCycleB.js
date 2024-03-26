import React, {Component} from "react";

class LifeCycleB extends Component{
    constructor(){
      super()
      this.state ={
        message:'Hello World'
    }
    console.log("B Constructor");
    }
static getDerivedStateFromProps(props, state)
{
    console.log("B Derived State from props")
    return null
}
componentDidMount(){
    console.log("B component did mount")
}
shouldComponentUpdate(){
    console.log("B should component update")
    return true
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("B get snapshot before update")
    return null
}
componentDidUpdate(){
    console.log("B component did update")
}
render() {
    console.log("B Render")
    return (
        <>
        <div>Lifecycle B</div>
        </>
    )
}
}
export default LifeCycleB