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

    return (
        <div>
            <GameViewGuess guessText={current} class="guess" key={'current'} />
            {renderGss}

            <div className="GameView-mkwrap">
                <MappleKeyboard
                    onChange={
                        (input: any) => {
                            setCurrent(input.substring(index, input.length))
                            setFullInput(input)
                        }
                    }

                    onKeyPress={
                        (input: any) => {
                            if (input === '{enter}') {
                                let rawcountries: String[] = require('../../resource/countrylist.json')
                                const countries = rawcountries.map(country => country.toUpperCase());

                                if (countries.includes(current.toLocaleUpperCase())) {
                                    setGuesses([current, ...guesses])
                                    setCurrent('')
                                    setIndex(fullInput.length)
                                } else {
                                    setCurrent('Not in list')
                                    setIndex(fullInput.length)
                                }
                            } else if (input === '{clear}') {
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