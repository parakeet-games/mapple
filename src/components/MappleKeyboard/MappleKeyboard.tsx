import React, { Component, Dispatch, SetStateAction } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { state } from '../../service/StateService';
interface Props {
  onChange: (e: any)=> void
  onKeyPress: (e: any)=> void
  guessText: string
  setGuessText: Dispatch<SetStateAction<string>>
}

export const MappleKeyboard = (props: Props)=> {
    const {onChange, onKeyPress} = props;

    return (
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    );
  
}