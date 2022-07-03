import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

var guessText = window.__GUESS_TEXT__

export class MappleKeyboard extends Component {
  onChange = (input: any) => {
    guessText = input
    console.log("Input changed", input);
  }

  onKeyPress = (button : any) => {
    console.log("Button pressed", button);
  }

  render(){
    return (
      <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}