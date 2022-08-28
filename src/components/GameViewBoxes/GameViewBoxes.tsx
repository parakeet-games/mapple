import { useState } from "react"
import '../../GameView.css';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

const conly = false; // Flag for only accepting countries

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
                (e) => console.log(e)
            }>
                <MappleKeyboard
                    onKeyPress={
                        (input: any) => {
                            if (input === '{enter}') {
                                let countriesRaw = require('../../resource/countrylist.json');

                                let countries: string[] = countriesRaw.map((country: string) => country.toUpperCase());

                                if (countries.includes(current.toUpperCase()) || !conly) {
                                    setGuesses([current, ...guesses])
                                    setCurrent('')
                                    setIndex(fullInput.length)
                                } else {
                                    setCurrent('Not A Country')
                                    setIndex(fullInput.length)
                                }
                            } else if (input === '{clear}') {
                                console.log(current);
                                setCurrent('')
                                console.log(fullInput, '::', index)
                                setIndex(fullInput.length)
                            } else if (input == '{space}') {
                                setCurrent(current + ' ')
                            } else if (input == '{bksp}') {
                                setCurrent(current.substring(0, current.length - 1))
                            } else if (/^[a-zA-Z]$/m.test(input)) {
                                setCurrent(current + input)
                            }
                        }
                    } />
            </div>
        </div>
    )
}