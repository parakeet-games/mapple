import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export class MappleKeyboard extends Component {
  onChange = (input: any) => {
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