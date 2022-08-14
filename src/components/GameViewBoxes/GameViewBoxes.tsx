import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import '../../GameView.css';
import '../../Main.css';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

interface GameViewBoxesProps {
    guesses: any[][];
    setGuesses: (newGuesses: any) => void;
}

export const GameViewBoxes = ({ guesses, setGuesses }: GameViewBoxesProps): JSX.Element => {
    const [boxes, setBoxes] = useState<(JSX.Element)[]>([])
    const [numBoxes, setNumBoxes] = useState(1)

    const [current, setCurrent] = useState([""]);

    const renderGss = guesses.map((g) => {
        return <GameViewGuess guess="india"
                              content={g[0]}
                              guessText={current[g[1]]}/>
    })
    
    const addGuess = ()=>{
        const temp =[...guesses]
        temp.push([current[current.length], current.length-1])

        setGuesses(temp)

        const curr = [...current]
        curr.push('')
        
        setCurrent(curr)
    }

    return (
        <div>
            {renderGss}
            <button onClick={()=>addGuess()}>
                {current}
            </button>

            <MappleKeyboard
            
            onChange={
                (input: any) => setCurrent(input)
            }
            
            onKeyPress={
                (input: any) => setCurrent(input)
            }/>
    </div>
    )
}