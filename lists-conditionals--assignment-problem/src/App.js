import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    textLength: 0,
    userInput: ''
  }

  textLengthHandler = (event) => {
    return this.setState({
      textLength: event.target.value.length,
      userInput: event.target.value
    })
  }

  removeChar = (charIndex) => {
    const userInputArr = [...this.state.userInput];
    userInputArr.splice(charIndex, 1);
    const userInput = userInputArr.join('')
    this.setState({ userInput })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br/><hr/><br/>
        <input
          type="text"
          onChange={ (event) => this.textLengthHandler(event) }
          value={this.state.userInput}
        />
        <p>{ this.state.textLength }</p>

        <ValidationComponent inputLength={ this.state.textLength }></ValidationComponent>

        <p> {this.state.userInput} </p>
        {this.state.userInput.split('').map((char, index) => {
          return (
            <CharComponent 
              name={char}
              key={index}
              click={() => this.removeChar(index)}
            />)
        })}
      </div>
    );
  }
}

export default App;
