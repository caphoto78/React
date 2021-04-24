import React, { useState } from 'react';

import './AddPerson.css';

const addPerson = (props) => {
    const [uname, setUname] = useState('');
    const [age, setAge] = useState('');

    const nameChangedHandler = (event) => {
        setUname(event.target.value)
    }

    const ageChangedHandler = (event) => {
        setAge(event.target.value)
    }


    return (
        < div className="AddPerson" >
            <input
                type="text"
                placeholder="Name"
                onChange={nameChangedHandler}
                value={uname}
            />
            <input
                type="number"
                placeholder="Age"
                onChange={ageChangedHandler}
                value={age}
            />
            <button onClick={() => props.personAdded(uname, age)}>Add Person</button>
        </ div>)
};

export default addPerson;