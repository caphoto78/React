import React, { Component } from 'react';
import classes from './App.css'; //you can name classes as you want
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

import AuthContext from '../context/auth-context';



class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'ewtqsfgyw', name: 'Tic', age: 42 },
      { id: 'fgrtehyhs', name: 'Carmen', age: 41 },
      { id: 'tyjwmjt21', name: 'Vladimir', age: 12 },
      { id: 'tyjdt21', name: 'Olga', age: 72 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate update state');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate update state');
    return true;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person =>
      person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    // alternative
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState((prevState, props) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({ showPersons: !this.state.showPersons })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {

    console.log('[App.js] render')

    let persons = null;

    if (this.state.showPersons) {
      persons =
        < Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        ></Persons>
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{ authenticated: this.state.authenticated, login: this.loginHandler }}
        >

          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          ></Cockpit> : null}

          {persons}

        </AuthContext.Provider>

      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);

