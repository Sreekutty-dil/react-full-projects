import React , { userState } from 'react';

// state in functional component

function Es2(props) {
    // const [state,handler] = useState(initial value)
    const [num, setNum] = React.useState(0);
    const [age, setAge] = React.useState(10);
    const [name, setName] = React.useState("Dil");

    const addValue = (val) => {
        setNum(num + val);
    }

    const agehandler = () => {
        setAge(age + 1);
    }
    return (
        <div>
            <h2>States in functional component</h2>
            <h3> number = {num} </h3>
            <hr />
            <button onClick={() => addValue(10)}>Add 10</button>
            <button onClick={() => addValue(100)}>Add 100</button>
            <button onClick={() => addValue(400)}>Add 400</button>
            <button onClick={() => addValue(600)}>Add 600</button>
            <button onClick={() => addValue(900)}>Add 900</button>
            <hr />
            <h3> name {name} and age is {age} </h3>
            <button onClick={agehandler}>Increment Age</button>
        </div>
    )
}

export default Es2;