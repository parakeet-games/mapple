import React, { useState } from "react";
import "./GameView.css";

import { GameViewBoxes } from "./components/GameViewBoxes/GameViewBoxes";
import { ReactComponent as Continents } from "./resource/continentsMap.svg";
import challenges from './resource/challenges.json'


function GameView() {
  console.log("%crerender GameView", "color: blue");
  const [guesses, setGuesses] = useState<string[]>([]);
  const updateGss = (newGuesses: string[]) => {
    setGuesses(newGuesses);
  };

  const [current, setCurrent] = useState("");

  var challenge: any;
  const dts = dateToStr();
  // @ts-ignore
  challenge = challenges[dts];

  if (challenge === undefined) {
    challenge = challenges["0default"]
    console.log('No challenge for today')
    console.log('Falling back on DEFAULT CHALLENGE')
  } else {
    console.log('Challenge found for today, '+dts)
  }

  return (
    <>
      <Continents
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          opacity: 0.2,
          zIndex: -10000,
        }}
      />
      <div className="GameView">
        <header className="GameView-header">
          <h1>MAPPLE</h1>
          {/* <p>A geography guessing game! Guess any country to get started.
            All 195 countries with UN recognition, including the non-members of Palestine and Vatican City, are valid.
            This game is still in its development stages!</p> */}
        </header>
        <GameViewBoxes
          current={current}
          setCurrent={setCurrent}
          guesses={guesses}
          setGuesses={updateGss}
          hints={challenge.clues}
          answer={challenge.answer}
        />
      </div>
    </>
  );
}

function dateToStr(date: Date = new Date()) {
  var yyyy: string = date.getFullYear() + ''

  var mm: string | number = date.getMonth() + 1
  if (mm < 10) mm = '0' + mm

  var dd: string | number = date.getDate()
  if (dd < 10) dd = '0' + dd


  return `${yyyy}${mm}${dd}`
}

export default GameView;
