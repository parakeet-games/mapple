import { useState } from "react"
import '../../GameView.css';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

interface GameViewBoxesProps {
    guesses: string[];
    setGuesses: (newGuesses: any) => void;
}

export const GameViewBoxes = ({ guesses, setGuesses }: GameViewBoxesProps): JSX.Element => {
    const [current, setCurrent] = useState("");

    const renderGss = guesses.map((g) => {
        return <GameViewGuess guessText={g} class="no" />
    })

    // TODO FIX BKSP HANDLING
    // REASON FOR SWITCHING FOR COMMIT 6cd9e9a: NEED TO ADD REGULAR KEYPRESSES

    return (
        <div>
            <GameViewGuess guessText={current} class="guess" />
            <div className="GameViewBoxes-wrap">{renderGss}</div>

            <div className="GameView-mkwrap" onKeyDown={
                (e)=>console.log(e)
            }>
                <MappleKeyboard
                    onChange={
                        (input: any) => {
                            var lastchar = input.substring(input.length-1, input.length)
                            if (lastchar.match(/[a-zA-Z ]/)) setCurrent(current + lastchar)
                        }
                    }

                    onKeyPress={
                        (input: any) => {
                            if (input == '{enter}') {
                                setGuesses([current, ...guesses])
                                setCurrent('')
                            } else if (input == '{bksp}') {
                                setCurrent(current.substring(current.length-2))
                            }
                        }
                    } />
            </div>
        </div>
    )
}