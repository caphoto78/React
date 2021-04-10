import React, { Component } from 'react';


import classes from './App.css'; //you can name classes as you want
import Person from './Person/Person';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  state = {
    persons: [
      { id: 'ewtqsfgyw', name: 'Tic', age: 42 },
      { id: 'fgrtehyhs', name:'Carmen', age: 41 },
      { id: 'tyjwmjt21', name: 'Vladimir', age: 12 },
      { id: 'tyjdt21', name: 'Olga', age: 72 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex( person => 
      person.id === id );
    const person = {
      ...this.state.persons[personIndex]
    };
    // alternative
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({ persons } );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [ ...this.state.persons ];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {

    let persons = null;
    let btnClasses = '';
    console.log(classes.Red)

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary
                key = { person.id }
              >
                < Person
                  click = { () => this.deletePersonHandler(index) } //or .bind(this, "index")
                  name = { person.name }
                  age = { person.age }
                  changed = { (event) => { this.nameChangedHandler(event, person.id) } }
                />
              </ErrorBoundary>)
          }) }
        </div>
      );
      btnClasses=classes.Red;
    }

    // let classes = ['red', 'bold'].join(' '); //"red bold"
    const assignedClasses = [];
    if(this.state.persons.length <=2) {
      assignedClasses.push(classes.red) // assignedClasses = ['red']
    } if (this.state.persons.length<=1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button
            className={btnClasses}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
          </button>
          
          { persons }
          
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;

