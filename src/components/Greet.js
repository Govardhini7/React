import React from "react";

// function Greet(){
//     return <h1>Hello World</h1>;
// }

const Greet = props => {
    // const Greet = ({name,age}) => {
    // console.log(props);
   const {name,age} = props
 return (
 <>
 <h1>Functional components</h1>
<h2>Hello {name} {age}</h2>
{/* <h2>Hello {propsn.ame} {props.age}</h2> */}
{/* {props.children} */}
</>
 )

}



export default Greet