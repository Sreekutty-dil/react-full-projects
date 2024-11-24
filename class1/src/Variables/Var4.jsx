import React, { Component } from "react";

let a = 12
let b = 24

let view = true

let users = ["john", "james", "sree", "dil"]

let course = {
    title: "html",
    type: "frontend"
}

class Variable4 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Variable Declaration in Class Component</h1>
                <h2> a = {a } and b = {b }</h2>
                <h2>product = { a * b}</h2>
                <hr />

                <h3>boolean  = {view ? "true" : "false" }</h3>
                <hr />

                <h3>course name = { course.title } and course type = {course.type }</h3>
                <hr />

                <ul>
                    {
                        users.map((val,index) => {
                            return (
                                <li key={index}> {val}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Variable4