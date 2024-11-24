import React , { Component } from 'react'
import Age from './Age';

// props is an attributes which pass from parent component to child component
class Ex1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Props in  Class Component</h1>
                <h3> x = {this.props.x } and y = {this.props.y} </h3>

                <Age a = {this.props.x} b={this.props.y}/>
            </div>
        )
    }
}

export default Ex1;