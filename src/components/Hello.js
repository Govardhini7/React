import React from "react";

const Hello = () => {
    return (
        <div className="dummy">
            <h1>Using JSX</h1>
        </div>
    )
    // return React.createElement(
    //     'div',null,React.createElement('h1',{className:'dummy'},'Without JSX')
    // )
}
export default Hello