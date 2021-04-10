import React from 'react'

import classes from './Person.css'


const Person = (props) => {

  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something went wrong!');
  }
  return (
    
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
      <p>{ props.children }</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    // </div>

  )
}

export default Person;


