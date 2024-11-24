import React , { Component }    from 'react';
import Ch2 from './Ch2';
let x = true
let title = "welcome to react"
let users = ["john", "mike", "sam", "anna"]

let emp = { 
    name: "John Doe",
    email: "john@gmail.com" ,
    age: 30   
}

class Ex3 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>props</h3>
                <Ch2 x = {x} title={title} users={users} emp= {emp}/>
            </div>
        )
    }
}

export default Ex3;