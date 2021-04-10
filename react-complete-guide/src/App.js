import React, { Component } from 'react';


import './App.css';
import Person from './Person/Person';



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
    const personIndex = this.state.persons.findIndex( person => person.id === id );
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

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              < Person
                click = { () => this.deletePersonHandler(index) } //or .bind(this, "index")
                name = { person.name }
                age = { person.age }
                key = { person.id }
                changed = { (event) => { this.nameChangedHandler(event, person.id) } }
              />)
          }) }
        </div>
      );
    }

    // let classes = ['red', 'bold'].join(' '); //"red bold"
    let classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red') // classes = ['red']
    } if (this.state.persons.length<=1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            className="button"
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

