import React, { useEffect, useState } from 'react';
import './GameViewGuess.css';
import '../../GameView.css';
import '../../Main.css';
import GameView from '../../GameView';

interface GameViewGuessProps {
    content: string
    guess?: string
    correct?: boolean
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
                var nextBox = document.createElement("img")
                nextBox.src = 'https://i.kym-cdn.com/news_feeds/icons/mobile/000/028/219/e5e.jpg'

                box.className = 'GameView-box GameView-box-no'
                box.contentEditable = 'false'

                box.parentNode?.appendChild(nextBox)
            }
        }
    }

    const onFocus = (e : React.FocusEvent<HTMLDivElement>) => {
        var boxspan = e.currentTarget.firstChild
        setInterval((box) => {
            setText(text.substring(0,text.length-1))
        },200)
    }
    return (
        <div className="GameView-box GameView-box-guess" onKeyDown={onAnswer} onFocus={onFocus} contentEditable><span>{text}</span></div>
    )

}

export default GameViewGuess