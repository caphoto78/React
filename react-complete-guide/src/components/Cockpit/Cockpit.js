import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000);
    toggleBtnRef.current.click();
    return (() => {
      // clearTimeout(timer)
      console.log('[Cockpit] useEffect cleanup')
    })
  }, []);

  useEffect(() => {
    console.log('[Cockpit] 2nd useEffect');
    return (() => { console.log('[Cockpit] 2nd useEffect cleanup') })
  })

  // let classes = ['red', 'bold'].join(' '); //"red bold"
  const assignedClasses = [];
  let btnClasses = '';
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red) // assignedClasses = ['red']
  } if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        ref={toggleBtnRef}
        className={btnClasses}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in</button>

    </div>
  )
}

export default React.memo(Cockpit);
