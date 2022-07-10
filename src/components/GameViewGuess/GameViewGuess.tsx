import React, { useEffect, useState } from 'react';
import './GameViewGuess.css';
import '../../GameView.css';
import '../../Main.css';

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
var guessText = window.__GUESS_TEXT__
guessText = 'TYPE HERE!'

export const GameViewGuess = (props: GameViewGuessProps): JSX.Element => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            var box = e.currentTarget

            if (props.guess!.toLowerCase() === box!.textContent!.toLowerCase().trim()) {
                box.className = 'GameView-box GameView-box-yes'
            } else {
                box.className = 'GameView-box GameView-box-no'
                props.newBox()
            }
        } else {
            guessText += e.key
        }
    }

    const onFocus = (e : React.FocusEvent<HTMLDivElement>) => {
        guessText = ''
    }
    
    // useEffect(()=>{
    //     const temp = [...boxes];
    //     while (temp.length < numBoxes) {
    //         temp.push(<GameViewGuess guess={props.guess} content={"TYPE HERE!"} newBox={newBox}/>)
    //     }

    //     setBoxes(temp)
    //     setNumBoxes(boxes.length)
    // }, [ numBoxes ])

    return (
        <div className="GameView-box GameView-box-guess" onKeyDown={onKeyDown} onFocus={onFocus}><span>{window.__GUESS_TEXT__}</span></div>
    )

}

export default GameViewGuess