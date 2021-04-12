import React, { Component, Fragment } from 'react';
// import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';


class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {

    console.log('[Person.js] rendering...');
    return (

      <Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name} />
      </Fragment>

    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);


