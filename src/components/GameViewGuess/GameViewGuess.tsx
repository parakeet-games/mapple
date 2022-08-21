import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './GameViewGuess.css';
import '../../GameView.css';
import '../../Main.css';
import { state } from '../../service/StateService';

interface GameViewGuessProps {
    children?: string
    guess?: string
    guessText: string
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
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            var box = e.currentTarget

            if (props.guess!.toLowerCase() === box!.textContent!.toLowerCase().trim()) {
                box.className = 'GameView-box GameView-box-yes'
            } else {
                box.className = 'GameView-box GameView-box-no'
            }
        } else {
        }
    }

    const onFocus = (e: React.MouseEvent<HTMLDivElement>) => {
        state.num = 5;
    }


    return (
        <div className="GameView-box GameView-box-guess" onKeyDown={onKeyDown} onClick={onFocus}><span>{props.guessText}</span></div>
    )

}

export default GameViewGuess