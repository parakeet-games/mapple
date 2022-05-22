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

function GameViewGuess(props: GameViewGuessProps) {
    return useGetGuessGuess(props)
    if (props.correct) {
        return getGuessCorrect(props)
    } else if (props.guess) {
    } else {
        return getGuessWrong(props)
    }
}

function getGuessCorrect(props: GameViewGuessProps) {
    return (
        <div className="GameView-box GameView-box-yes"><span>{props.content}</span></div>
    )
}

export const useGetGuessGuess = (props: GameViewGuessProps) => {
    const [correct, setCorrect] = useState(true);
    const items: JSX.Element[] = []

    useEffect(()=>{
        if(correct){
            items.push(<div>hello</div>)
            setCorrect(false);
        }
    })

    const onAnswer = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key == "Enter") {
            e.preventDefault()
            var guessbox = document.querySelector('.GameView-box-guess')
  
            setCorrect(props.guess!.toLowerCase() == guessbox!.textContent!.toLowerCase())
        }
    }

    return (
        correct ? <div className="GameView-box GameView-box-guess" onKeyPress={onAnswer} contentEditable>{items}<span>{props.content}</span></div> : <div><p>hello</p></div>
    )
}

function getGuessWrong(props: GameViewGuessProps) {
    return (
        <div className="GameView-box GameView-box-no"><span>{props.content}</span></div>
    )
}

export default GameViewGuess;
