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
    const [index, setIndex] = useState<number>(0);
    const [fullInput, setFullInput] = useState("");

    const renderGss = guesses.map((g) => {
        return <GameViewGuess guessText={g} class="no" key={g} />
    })

    // TODO FIX BKSP HANDLING
    // REASON FOR SWITCHING FOR COMMIT 6cd9e9a: NEED TO ADD REGULAR KEYPRESSES

    return (
        <div>
            <GameViewGuess guessText={current} class="guess" />
            {renderGss}

            <div className="GameView-mkwrap" onKeyDown={
                (e)=>console.log(e)
            }>
                <MappleKeyboard
                    onChange={
                        (input: any) => {
                            setCurrent(input.substring(index, input.length))
                            setFullInput(input)
                        }
                    }

                    onKeyPress={
                        (input: any) => {
                            if (input == '{enter}') {
                                setGuesses([current, ...guesses])
                                setCurrent('')
                                setIndex(fullInput.length)
                            } else if (input == '{clear}') {
                                console.log(current);
                                setCurrent('')
                                console.log(fullInput, '::', index)
                                setIndex(fullInput.length)
                            }
                        }
                    } />
            </div>
        </div>
    )
}