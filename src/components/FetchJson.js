import React, { Component } from 'react';

function getAPI(){
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>console.log(data))
    return(
        <>
        <div>Get API</div>
        </>
    )
}

export default getAPI;