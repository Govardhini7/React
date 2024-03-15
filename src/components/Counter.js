import React, {Component} from "react";

class Counter extends Component{

    constructor(){
        super()
            this.state = {
                count: 0
            }
        
    }
    increment(){
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        
        
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => console.log('Callback value', this.state.count)
        // )

        this.setState(prevState =>({
            count:prevState.count + 5
        }),
        () => console.log('Callback value', this.state.count)
        )
        console.log(this.state.count);
    }
render() {
    return (
        <>
        <h1>Count</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <p>Count - {this.state.count}</p>
        </>
    )
   


}
}

export default Counter