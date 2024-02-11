import React, { useEffect, useState } from "react";
import "./GameView.css";
import { GameViewBoxes } from "./components/GameViewBoxes/GameViewBoxes";
import { ReactComponent as Continents } from "./resource/continentsMap.svg";
import challenges from './resource/challenges.json'
import fallbacks from './resource/fallbacks.json'

function GameView() {
  console.log("%cRe-rendering GameView", "color: yellow");
  const [message, setMessage] = useState("")
  const [guesses, setGuesses] = useState<string[]>([]);
  const [dts, setDts] = useState<any>()
  const updateGss = (newGuesses: string[]) => {
    setGuesses(newGuesses);
  };
  const [current, setCurrent] = useState("");

  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      e.preventDefault()
    })
    const dtsCurrent : string = dateToStr();
    setDts(dtsCurrent)
  },[])


  var challenge: any;
  console.log('date to string:', dts)

  // @ts-ignore
  challenge = challenges[dts];

  if (challenge === undefined || challenge.clues.length == 0) { // If challenge does not exist or has no clues
    console.log("My body is made of ants")
    let now   = Date.now()
    let today = Math.floor(now / 24 / 60 / 60 / 1000); // Get date as a number
    let index = today % Object.keys(fallbacks).length // Convert to an index in fallbacks

    let chalDates = Object.keys(challenges).sort();
    challenge = fallbacks[index]

    console.log("No challenge for today, converting today's date", dts, 'to challenge #'+index, 'in fallbacks')
  } else {
    console.log('Challenge found for today,', dts+':')
    console.log(challenge)
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
          <h1>{message}</h1>
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

// Inclusive
// function randInt(min : number, max : number) {
//   min = Math.ceil(min);
//   max = Math.floor(max + 1);
//   return Math.floor(Math.random() * (max - min) + min);
// }

export default GameView;
