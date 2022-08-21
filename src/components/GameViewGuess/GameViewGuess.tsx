import './GameViewGuess.css';
import '../../GameView.css';

interface GameViewGuessProps {
    children?: string
    guessText: string
    class: string
}

export const GameViewGuess = (props: GameViewGuessProps): JSX.Element => {
    return (
        <div className={"GameView-box GameView-box-"+props.class}><span>{props.guessText}</span></div>
    )

}

export default GameViewGuess