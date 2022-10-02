import { useMemo, useState } from "react"
import '../../GameView.css';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

const conly = false; // Flag for only accepting countries

interface GameViewBoxesProps {
    guesses: string[];
    setGuesses: (newGuesses: any) => void;
    answer: string;
}

export const GameViewBoxes = ({ guesses, setGuesses, answer }: GameViewBoxesProps): JSX.Element => {
    const [current, setCurrent] = useState("");
    const [index, setIndex] = useState<number>(0);
    const [fullInput, setFullInput] = useState("");
    const [correct, setCorrect] = useState<boolean>(false)

    useMemo(() => window.addEventListener('keyup', (e) => {
        console.log('Kirby is covered in cheese sauce')
        var input = null
        if (/^[a-zA-Z]$/m.test(e.key)) {
            input = e.key
        } else {
            switch (e.key) {
                case ' ':
                    input = '{space}'
                    break

                case 'Enter':
                    input = '{enter}'
                    break

                case 'Backspace':
                    input = '{bksp}'
                    break
            }
        }
        // console.log("input",input)
        if (input != null) checkInput(input)
    }), [])

    const renderGss = guesses.map((g) => {
        return <GameViewGuess guessText={g} class="no" key={g} />
    })

    const checkInput = (input: any) => {
        if (correct) return
        if (input === '{enter}') {
            // TODO Replace with list from mapple-back
            let countriesRaw = require('../../resource/countrylist.json');

            let countries: string[] = countriesRaw.map((country: string) => country.toUpperCase());

            if (current === answer) {
                setCorrect(true)
            } else if (countries.includes(current.toUpperCase()) || !conly) {
                setGuesses([current, ...guesses])
                setCurrent('')
                setIndex(fullInput.length)
            } else {
                // TODO have popup alert or box shake or something instead
                // I can add that - WAC
                setCurrent('Not a country')
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
            console.log(`${current}[${input.toLowerCase()}]`)
            setCurrent(current + input.toLowerCase())
        }
    }

    // TODO FIX BKSP HANDLING
    // REASON FOR SWITCHING FOR COMMIT 6cd9e9a: NEED TO ADD REGULAR KEYPRESSES

    if (correct) {
        return (
            <div>
                <GameViewGuess guessText={current} class="yes" />
                {renderGss}

                <div className="GameView-mkwrap" onKeyDown={(e) => {}}>
                    <MappleKeyboard
                        onKeyPress={(e) => {}} />
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <GameViewGuess guessText={current} class="guess" />
                {renderGss}

                <div className="GameView-mkwrap" onKeyDown={
                    (e) => {checkInput}
                }>
                    <MappleKeyboard
                        onKeyPress={checkInput} />
                </div>
            </div>
        )
    }
}