import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
interface Props {
  onKeyPress: (e: any) => void
}

export const MappleKeyboard = (props: Props) => {
  const { onKeyPress } = props;

  return (
    <Keyboard
      onKeyPress={onKeyPress}
      layout={{
        'default': [
          'Q W E R T Y U I O P',
          'A S D F G H J K L',
          '{bksp} {clear} Z X C V B N M {enter}',
          '{space}'
        ]
      }}
      display={{
        '{bksp}': '⌫',
        '{clear}': 'clr',
        '{space}': 'space',
        '{enter}': '↵'
      }}
      buttonTheme={[
        {
          class: 'mk-bksp',
          buttons: '{bksp}'
        },
        {
          class: 'mk-clear',
          buttons: '{clear}'
        },
        {
          class: 'mk-space',
          buttons: '{space}'
        },
        {
          class: 'mk-enter',
          buttons: '{enter}'
        },
      ]}
    />
  );

}