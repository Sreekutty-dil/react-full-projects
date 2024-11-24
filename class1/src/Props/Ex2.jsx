import React , { Component } from 'react';
import Ch1 from './Ch1';

class Ex2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
        this.incVal = this.incVal.bind(this) // method binding
    }
    incVal(val) {
        this.setState({
            num: this.state.num + val
        })
    }

    render() {
        return (
            <div>
                <h3>Props in class component</h3>
                <Ch1 num = { this.state.num } clickHandler={this.incVal}/>
            </div>
        )
    }
}

export default Ex2;

