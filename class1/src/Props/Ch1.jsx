import React , { Component } from 'react';

class Ch1 extends Component {
    constructor(props) {
        super(props);
    }
  
    
    render() {
        return (
            <div>
                <h1>Child -1 Component</h1>
                <h1>Num = {this.props.num}</h1>

                <button onClick={() => this.props.clickHandler(50)}>Add 50</button>
                <button onClick={() => this.props.clickHandler(100)}>Add 100</button>
                <button onClick={() => this.props.clickHandler(150)}>Add 150</button>
            </div>
        )
    }
}

export default Ch1;