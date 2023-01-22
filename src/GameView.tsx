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
    name: "New Zealand",
    hints: [
      "Located in the South Pacific Ocean",
      "Is an island, has no land borders",
      "National holiday is 6 February",
      "Significant consumer of amphetamines",
      "Main exports are dairy products, sheep/goat meats, lumber",
      "Named after the Dutch province of Zeeland",
      "Former British colony, became independent in 1907",
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
