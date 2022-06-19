import React, { useEffect, useState } from 'react';
import './GameViewGuess.css';
import '../../GameView.css';
import '../../Main.css';
import GameView from '../../GameView';

interface GameViewGuessProps {
    content: string
    guess?: string
    correct?: boolean
    newBox: () => void
}

// function GameViewGuess(props: GameViewGuessProps) {
//     return useGetGuessGuess(props)
//     if (props.correct) {
//         return getGuessCorrect(props)
//     } else if (props.guess) {
//     } else {
//         return getGuessWrong(props)
//     }
// }

export const GameViewGuess = (props: GameViewGuessProps): JSX.Element => {
    const [text, setText] = useState("TYPE HERE!")
    const onAnswer = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key == "Enter") {
            e.preventDefault()
            var box = e.currentTarget

            if (props.guess!.toLowerCase() === box!.textContent!.toLowerCase().trim()) {
                box.className = 'GameView-box GameView-box-yes'
                box.contentEditable = 'false'
            } else {
                box.className = 'GameView-box GameView-box-no'
                box.contentEditable = 'false'

                props.newBox()
            }
        }
    }

    const onFocus = (e : React.FocusEvent<HTMLDivElement>) => {
        setText('')
    }
    return (
        <div className="GameView-box GameView-box-guess" onKeyDown={onAnswer} onFocus={onFocus} contentEditable><span>{text}</span></div>
    )

}

export default GameViewGuess