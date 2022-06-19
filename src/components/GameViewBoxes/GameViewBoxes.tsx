import React, { useEffect, useState } from "react"
import '../../GameView.css';
import '../../Main.css';
import GameView from '../../GameView';
import { GameViewGuess } from "../GameViewGuess/GameViewGuess"

interface GameViewBoxesProps {
    guess?: string
}

export const GameViewBoxes = (props: GameViewBoxesProps): JSX.Element => {
    const [boxes, setBoxes] = useState<(JSX.Element)[]>([])
    const [numBoxes, setNumBoxes] = useState(1)
    const newBox = ()=>{
        setNumBoxes(numBoxes + 1);
    }
    useEffect(()=>{
        const temp = [...boxes];
        while (temp.length < numBoxes) {
            temp.push(<GameViewGuess guess={props.guess} content={"TYPE HERE!"} newBox={newBox}/>)
        }

        setBoxes(temp)
        setNumBoxes(boxes.length)
    }, [numBoxes])

    return (
        <section className="GameView-boxes">
            {boxes}
        </section>
    )
}