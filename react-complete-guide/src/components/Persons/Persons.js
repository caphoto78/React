import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {


  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps - update', props)
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true or false => compare current props (this.props) 
    // to the upcomming props(nextProps)
    console.log('[Persons.js] shouldComponentUpdate - update')
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate - update');
    return { message: 'Snapshot' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate - update');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount - cleanup');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        < Person
          click={() => this.props.clicked(index)} //or .bind(this, "index")
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />);
    });
  }
}
export default Persons;
