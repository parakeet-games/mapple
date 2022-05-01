import React from 'react';
import './GameViewGuess.css';
import '../../GameView.css';
import '../../Main.css';

interface GameViewGuessProps {
    content: string
    guess?: boolean
    correct?: boolean
}

function GameViewGuess(props: GameViewGuessProps) {
    if (props.correct) {
        return (
            <div className="GameView-box GameView-box-yes"><span>{props.content}</span></div>
        )
    } else if (props.guess) {
        return (
            <div className="GameView-box GameView-box-guess" contentEditable><span>{props.content}</span></div>
        )
    } else {
        return (
            <div className="GameView-box GameView-box-no"><span>{props.content}</span></div>
        )
    }
}

export default GameViewGuess;
