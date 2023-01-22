import React, { useState } from "react";
import "./GameView.css";

import { GameViewBoxes } from "./components/GameViewBoxes/GameViewBoxes";
import { ReactComponent as Continents } from "./resource/continents-map.svg";
import clues from './clues.json'


function GameView() {
  console.log("%crerender GameView", "color: blue");
  const [guesses, setGuesses] = useState<string[]>([]);
  const updateGss = (newGuesses: string[]) => {
    setGuesses(newGuesses);
  };

  const [current, setCurrent] = useState("");

  console.log(clues)

  var date = new Date()

  var currentChallenge: any;

  try {
    // @ts-ignore
    currentChallenge = clues[`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`];
  } catch (error) {
    currentChallenge = {
      answer: "United States",
      hints: [
        'The first modern democracy', 'Flag is striped', 'Has fought many wars', 'Located in North American', 'Considered a world superpower'
      ]
    }
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
        </header>
        <GameViewBoxes
          current={current}
          setCurrent={setCurrent}
          guesses={guesses}
          setGuesses={updateGss}
          hints={currentChallenge.clues}
          answer={currentChallenge.answer}
        />
      </div>
    </>
  );
}

export default GameView;
