import React, { useState } from "react";
import "./GameView.css";

import { GameViewBoxes } from "./components/GameViewBoxes/GameViewBoxes";
import { ReactComponent as Continents } from "./resource/continents-map.svg";

function GameView() {
  console.log("%crerender GameView", "color: blue");
  const [guesses, setGuesses] = useState<string[]>([]);
  const updateGss = (newGuesses: string[]) => {
    setGuesses(newGuesses);
  };

  const [current, setCurrent] = useState("");

  var test1 = {
    name: "Egypt",
    hints: [
      "This country is located in the northeastern region of Africa.",
      "The official language is a Semitic language that uses the Arabic script.",
      "The currency is the pound.",
      "The capital city is home to one of the largest and busiest squares in Africa.",
      "It is home to some of the oldest and most famous pyramids in the world.",
    ],
  };

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
          hints={test1.hints}
          answer={test1.name}
        />
      </div>
    </>
  );
}

export default GameView;
