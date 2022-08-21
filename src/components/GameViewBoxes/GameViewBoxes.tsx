import { setUncaughtExceptionCaptureCallback } from "process";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import '../../GameView.css';
import '../../Main.css';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

interface GameViewBoxesProps {
    guesses: string[];
    setGuesses: (newGuesses: any) => void;
}

export const GameViewBoxes = ({ guesses, setGuesses }: GameViewBoxesProps): JSX.Element => {
    const [boxes, setBoxes] = useState<(JSX.Element)[]>([])
    const [numBoxes, setNumBoxes] = useState(1)

    const [current, setCurrent] = useState("");
    const [index, setIndex] = useState<number>(0);
    const [fullInput, setFullInput] = useState("");

    const renderGss = guesses.map((g) => {
        return <GameViewGuess guess="india"
                              guessText={g}/>
    })

    return (
        <div>
            {renderGss}

            <GameViewGuess guess="india"
                              guessText={current}/>

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
                        setGuesses([...guesses, current])
                        setCurrent('')
                        console.log(fullInput, '::', index)
                        setIndex(fullInput.length)
                    }
                }
            }/>
    </div>
    )
}