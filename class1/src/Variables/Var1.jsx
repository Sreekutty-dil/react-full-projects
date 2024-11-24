import React from 'react';

// global variables
let x = 123

//boolean variables
let a = true
let z = "welcome to react" // string
let user = { // object
    name: "John",
    age: 25
}

// array variables
let colors = ["black", "white", "red"]

function Variable1(props) {
    //local
    let y = 34
    return (
        <div>
            <h1>Variables in functional component</h1>
            <h2>x= {x}</h2>
            <h2>y= {y}</h2>
            <h2> product = { x * y } </h2>

            <h2> boolean = { a ? "say true" : "say false" }</h2>
            <h2>z = { z }</h2>
            <h2>name = { user.name } and age = { user.age }</h2>
            <hr />

            <ol>
                {
                    colors.map((val,index) => {
                        return (
                            <li key={index}> { val }</li>
                        )
                    })
                }
            </ol>

            </div>    
    )
}

export default Variable1;