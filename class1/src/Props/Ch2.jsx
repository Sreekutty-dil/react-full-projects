import React , { Component }    from 'react';

class Ch2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>props</h3>
                <h3>boolean = {this.props.x ? "true" : "false" }</h3>
                <h3>string = {this.props.title }</h3>

                <h3>username = {this.props.emp.name}, email is = {this.props.emp.email} and age = {this.props.emp.age}</h3>

                <hr />
                {
                    <ol>
                        {
                            this.props.users.map((item,index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ol>
                }
            </div>
        )
    }
}

export default Ch2;