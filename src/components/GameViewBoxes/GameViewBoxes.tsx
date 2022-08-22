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

    return (
        <div>
            <GameViewGuess guessText={current} class="guess" />
            <div className="GameViewBoxes-wrap">{renderGss}</div>

            <div className="GameView-mkwrap">
                <MappleKeyboard
                    onChange={
                        (input: any) => {
                            setCurrent(current + input.substring(input.length-1, input.length))
                        }
                    }

                    onKeyPress={
                        (input: any) => {
                            if (input == '{enter}') {
                                setGuesses([current, ...guesses])
                                setCurrent('')
                            } else if (input == '{clear}') {
                                console.log(current);
                                setCurrent('')
                            }
                        }
                    } />
            </div>
        </div>
    )
}