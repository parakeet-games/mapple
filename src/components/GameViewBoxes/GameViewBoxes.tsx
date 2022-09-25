import { useMemo, useState } from "react"
import '../../GameView.css';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"
import GameViewHint from "../GameViewHint/GameViewHint";
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

const conly = true; // Flag for only accepting countries
const nac = 'Not a country';
interface GameViewBoxesProps {
    guesses: string[];
    hints: string[];
    setGuesses: (newGuesses: any) => void;
}

export const GameViewBoxes = ({ guesses, hints, setGuesses }: GameViewBoxesProps): JSX.Element => {
    const [current, setCurrent] = useState("");
    const [inputIndex, setInputIndex] = useState<number>(0);
    const [fullInput, setFullInput] = useState("");

    const [hint, setHint] = useState("After each guess, you get a hint.");
    const [hintIndex, setHintIndex] = useState<number>(0);

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
        if (input != null) mkOKPkokomo(input)
    }), [])

    const renderGss = guesses.map((g) => {
        return <GameViewGuess guessText={g} class="no" key={g} />
    })

    const mkOKPkokomo = (input: any) => {
        if (input === '{enter}') {
            // TODO Replace with list from mapple-back
            let countries: string[] = require('../../resource/countrylist.json').map((country: string) => country.toUpperCase());

            if (countries.includes(current.toUpperCase()) || !conly) {
                setGuesses([current, ...guesses])
                setCurrent('')
                setInputIndex(fullInput.length)

                if (hintIndex === hints.length - 1) {
                    setHint('you used up your hints you greedy pig')
                } else {
                    var hint = document.querySelector('.GameView-hint')
                    hint!.className = 'GameView-hint GameView-hintblur'

                    setTimeout(() => {
                        hint!.className = 'GameView-hint'
                        setHintIndex(hintIndex + 1)
                        setHint(hints[hintIndex])
                    }, 500);
                }
            } else {
                // TODO have popup alert or box shake or something instead
                // I can add that - WAC
                setCurrent(nac)
                setInputIndex(fullInput.length)
                
                var box = document.querySelector('.GameView-box-guess')
                box!.className = 'GameView-box-guess GameView-box-nac'
                setTimeout(() => {
                    box!.className = 'GameView-box-guess'
                }, 1000);
            }
        } else if (input === '{clear}') {
            console.log(current);
            setCurrent('')
            console.log(fullInput, '::', inputIndex)
            setInputIndex(fullInput.length)
        } else if (input === '{space}') {
            setCurrent(current + ' ')
        } else if (input === '{bksp}') {
            setCurrent(current.substring(0, current.length - 1))
        } else if (/^[a-zA-Z]$/m.test(input)) {
            if (current === nac) {
                setCurrent(input)
            } else setCurrent(current + input)
        }
    }

    // TODO FIX BKSP HANDLING
    // REASON FOR SWITCHING FOR COMMIT 6cd9e9a: NEED TO ADD REGULAR KEYPRESSES

    return (
        <div>
            <GameViewHint hint={hint} />
            <GameViewGuess guessText={current} class="guess" />
            {renderGss}

            <div className="GameView-mkwrap" onKeyDown={
                (e) => console.log(e)
            }>
                <MappleKeyboard
                    onKeyPress={mkOKPkokomo} />
            </div>
        </div>
    )
}