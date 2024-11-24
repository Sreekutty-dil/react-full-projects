import React , { Component } from 'react'

class Age extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Props in  Class Component</h1>
                <h3>age of a user = {this.props.a }</h3>
                <h3>age of b user = {this.props.b }</h3>
            </div>
        )
    }
}

export default Age;