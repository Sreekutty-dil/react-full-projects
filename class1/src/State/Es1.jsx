import React, { Component } from "react";

class Es1 extends Component {
    constructor(props) {
        super(props)
        // state is defined as a object inside the constructor
        // state is an internal variable of react component
        this.state = {
            p: 12, // number
            q: 34,// number
            isUser: false, // boolean
            title: "welcome to react states", // string
            users: ["sree", "dil", "kutty"], // array
            course: { // object
                id: 1,
                title: "React",
                type: "library"
            }
        }
    }

    render() {
        return (
            <div>
                <h1>States in  Class Component</h1>

                <h3>p = { this.state.p }</h3>
                <h3>q = { this.state.p }</h3>
                <h3>sum = { this.state.p + this.state.q }</h3>
                <hr />

                <h3> boolean = { this.state.isUser ? "User" : "Non-User" }</h3>
                <hr />

                <ol>
                    {
                        this.state.users.map((val,index) =>{
                            return (
                                <li key={index}>{ val }</li>
                            )
                        })
                    }
                </ol>
                <hr />

                <h3> course id = { this.state.course.id }</h3>
                <h3> course title = { this.state.course.title }</h3>
                <h3> course type = { this.state.course.type }</h3>
            </div>
        )
    }
}

export default Es1;