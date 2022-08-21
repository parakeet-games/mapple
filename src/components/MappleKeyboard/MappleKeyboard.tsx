import React, { Component, Dispatch, SetStateAction } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { state } from '../../service/StateService';
interface Props {
  onChange: (e: any)=> void
  onKeyPress: (e: any)=> void
}

export const MappleKeyboard = (props: Props)=> {
    const {onChange, onKeyPress} = props;

    return (
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
            'default': [
              'q w e r t y u i o p {bksp}',
              'a s d f g h j k l {enter}',
              'z x c v b n m {enter}',
              '{space}'
            ]
          }}
      />
    );
  
}