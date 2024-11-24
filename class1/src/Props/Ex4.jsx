import React from 'react';
import Ch3 from './Ch3';

let x = true
let title = "welcome to react"
let users = ["john", "mike", "sam", "anna"]

let emp = { 
    name: "John Doe",
    email: "john@gmail.com" ,
    age: 30   
}

function Ex4(props) {
    return (
        <div>
            <h1>functional components</h1>
            <Ch3 view={x} a={20} b={30} str={title} persons={users} user={emp}/>
        </div>
    )
}
export default Ex4;