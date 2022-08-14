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
    const renderGss = guesses.map((g) => {
        return <GameViewGuess guess="india"
                              content={g}/>
    })
    
    const addGuess = ()=>{
        const temp =[...guesses]
        temp.push(current)

        setGuesses(temp)
        setCurrent('')
    }

    return (
        <div>
            {renderGss}
            <button onClick={()=>addGuess()}>
                {current}
            </button>

            <MappleKeyboard onKeyPress={(input: any) => setCurrent(current + input)} onChange={function (e: any): void {
                throw new Error("Function not implemented.");
            } } guessText={""} setGuessText={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } }/>
    </div>
    )
}