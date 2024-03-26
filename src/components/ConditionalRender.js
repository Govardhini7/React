import React, {Component} from "react";

class ConditionalRender extends Component{
    constructor(){
        super()
        this.state ={
            isLoggedIn: false
        }
    }

    render()
    {
        if(this.state.isLoggedIn){
        return <div>Welcome User</div>
        }
        else{
        return <div>Welcome Guest</div>
        }
    //  return (
    //     <>
    //     <h3>ConditionalRender</h3>
    //     </>
    // )
}
}

export default ConditionalRender