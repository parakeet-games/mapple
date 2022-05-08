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
        // var ce = document.querySelector('[contenteditable]')
        // ce.addEventListener('paste', function (e) {
        //     e.preventDefault()
        //     var text = e.clipboardData.getData('text/plain')
        //     document.execCommand('insertText', false, text)
        // })
        
        return (
            <div className="GameView-box GameView-box-guess" onKeyPress={
                (e)=>{
                    if (e.key == "Enter") {
                        e.preventDefault()

                        var X = document.querySelector('.GameView-box-guess')
                        if (X != null) X.className.replace(/GameView-box-guess/g, 'GameView-box-wrong')
                    }
                }
            } contentEditable><span>{props.content}</span></div>
        )
    } else {
        return (
            <div className="GameView-box GameView-box-no"><span>{props.content}</span></div>
        )
    }
}

export default GameViewGuess;
