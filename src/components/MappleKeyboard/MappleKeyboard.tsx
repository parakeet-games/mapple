import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
interface Props {
  onChange: (e: any)=> void
  onKeyPress: (e: any)=> void
}

export const MappleKeyboard = (props: Props)=> {
    const {onChange, onKeyPress} = props;
    // TODO: Backspace causes issues with fullInput, replaced by clear for now
    return (
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
            'default': [
              'Q W E R T Y U I O P',
              'A S D F G H J K L',
              'Z X C V B N M',
              '{clear} {space} {enter}'
            ]
          }}
          display={{
            '{bksp}': '⌫',
            '{clear}': "Clear",
            '{space}': 'Space',
            '{enter}': 'Submit'
          }}
      />
    );
  
}