import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './GameViewGuess.css';
import '../../GameView.css';
import '../../Main.css';
import { state } from '../../service/StateService';

interface GameViewGuessProps {
    children?: string
    guessText: string
    class: string
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
    return (
        <div className={"GameView-box GameView-box-"+props.class}><span>{props.guessText}</span></div>
    )

}

export default GameViewGuess