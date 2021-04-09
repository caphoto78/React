import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tic', age: 42 },
      { name:'Carmen', age: 41 },
      { name: 'Vladimir', age: 12 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    this.setState({ persons: [
      { name: newName, age: 42 },
      { name:'Florenta', age: 41 },
      { name: 'Vladimir', age: 12 }
    ] } );
  }

  nameChangedHandler = (event) => {
    this.setState({ persons: [
      { name: 'Constantin', age: 42 },
      { name: event.target.value, age: 41 },
      { name: 'Vladimir', age: 12 }
    ] } );
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => {
            return (
              < Person
                name = { person.name }
                age = { person.age }
              />)
          }) }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler} 
        >
          Switch Name
        </button>
        
        { persons }
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;

