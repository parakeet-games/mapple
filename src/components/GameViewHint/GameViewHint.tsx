import './GameViewHint.css';
import '../../GameView.css';

interface GameViewHintProps {
    children?: string
    hint: string
}

export const GameViewHint = (props: GameViewHintProps): JSX.Element => {
    return (
        <div className={"GameView-hint"}><span>{props.hint}</span></div>
    )

}

export default GameViewHint