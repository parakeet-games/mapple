import React from 'react';
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
                (e) => {
                    if (e.key == "Enter") {
                        e.preventDefault()
                        var guessbox = document.querySelector('.GameView-box-guess')

                        if (guessbox != null && props.guess != null && guessbox.textContent != null) {
                            if (props.guess.toLowerCase() == guessbox.textContent.toLowerCase()) guessbox.className = guessbox.className.replace(/GameView-box-guess/g, 'GameView-box-yes')
                             else guessbox.className = guessbox.className.replace(/GameView-box-guess/g, 'GameView-box-no')
                            guessbox?.setAttribute('contentEditable', 'false')
                            guessbox?.setAttribute('onKeyPress', '')
                        }
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
