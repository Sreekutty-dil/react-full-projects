import React , { useState } from 'react';

function Es3(props) {
    const [color,setColor] = useState("");

    const generateColor = () => {
        setColor(Math.random().toString(16).substr(-6))
    }

    return (
        <div>
            <h1>React state</h1>
            <button onClick={generateColor}>Generate Random colors</button>
            <div style={{ width: "200px" , height: "200px" , backgroundColor: `#${color}` }}>
                <p>Random colors</p>
            </div>
        </div>
    )
}
export default Es3