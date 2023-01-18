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
    name: "Oman",
    hints: [
      "Located in the Middle East between Yemen and the UAE",
      "Roughly twice the size of the U.S. state of Georgia",
      "Heavily dependent on oil and gas",
      "Capital is Muscat",
      "Former Portugese colony, became independent in 1650",
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
