import React from 'react';

function Ch3(props) {
    return (
        <div>
            <h1>Child Component 3</h1>
            <h3> a= {props.a} and b = {props.b} </h3>
            <h3>boolean = {props.view ? "true" : "false" }</h3>
            <h3>strings = {props.str}</h3>
            <h3>name = {props.user.name} , email = {props.user.email} and age = {props.user.age}</h3>
            
            
            <ol>
                {
                    props.persons.map((item,index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Ch3