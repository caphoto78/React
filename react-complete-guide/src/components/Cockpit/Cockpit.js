import React from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) => {
  // let classes = ['red', 'bold'].join(' '); //"red bold"
  const assignedClasses = [];
  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red) // assignedClasses = ['red']
  } if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClasses}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  )
}

export default Cockpit
