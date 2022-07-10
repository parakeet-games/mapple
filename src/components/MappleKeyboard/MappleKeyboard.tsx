import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export class MappleKeyboard extends Component {
  onChange = (input: any) => {
    window.__GUESS_TEXT__ = input
    console.log("Input changed", window.__GUESS_TEXT__);
    // document.querySelector('.GameView-box-guess > span')!.textContent = input
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