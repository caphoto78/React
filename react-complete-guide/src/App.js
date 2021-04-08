import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Tic', age: 42 },
      { name:'Carmen', age: 41 },
      { name: 'Vladimir', age: 12 }
    ],
  });


  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    setPersonsState({
      persons: [
        { name: 'Constantin', age: 42 },
        { name:'Florenta', age: 41 },
        { name: 'Vladimir', age: 12 }
      ],
      // otherState: personsState.otherState
   } );
  }
 
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler} >Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age } />
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age } > My hobbies: Swimming </Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age } />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
}

export default App;

