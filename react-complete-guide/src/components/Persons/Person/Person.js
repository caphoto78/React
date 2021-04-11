import React, { Component } from 'react'

import classes from './Person.css'


class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (

      // <div className="Person" style={style}>
      <div className={classes.Person} >
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
      // </div>

    )
  }

}

export default Person;


