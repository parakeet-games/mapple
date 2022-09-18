import './GameViewHint.css';
import '../../GameView.css';

interface GameViewHintProps {
    children?: string
    hint: string
}

export const GameViewHint = (props: GameViewHintProps): JSX.Element => {
    // ON CHANGE
// var hint = document.querySelector('.GameView-hint')
// hint.className = 'GameView-hint GameView-hintblur'

// setTimeout(() => { 
//  	hint.textContent = 'New hint'
// hint.className = 'GameView-hint GameView-hint'
// }, 500);

    return (
        <div className={"GameView-hint"}><span>{props.hint}</span></div>
    )

}

export default GameViewHint