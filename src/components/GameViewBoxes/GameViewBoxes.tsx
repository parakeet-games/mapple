import useEventListener from "@use-it/event-listener";
import { useState } from "react";
import "../../GameView.css";
import { GameViewGuess } from "../GameViewGuess/GameViewGuess";
import GameViewHint from "../GameViewHint/GameViewHint";
import { MappleKeyboard } from "../MappleKeyboard/MappleKeyboard";

const conly = false; // Flag for only accepting countries
const logging = true; // Flag for GameViewBoxes logging
const nac = "Not a country.";
interface GameViewBoxesProps {
  current: string;
  setCurrent: (newCurrent: string) => void;
  guesses: string[];
  setGuesses: (newGuesses: any) => void;
  answer: string;
  hints: string[];
}

export const GameViewBoxes = ({
  current,
  setCurrent,
  guesses,
  hints,
  setGuesses,
  answer,
}: GameViewBoxesProps): JSX.Element => {
  const [correct, setCorrect] = useState<boolean>(false);
  const [hint, setHint] = useState(
    "Guess a country. Don't worry, you'll get a hint if you get it wrong!"
  );
  const [hintIndex, setHintIndex] = useState<number>(0);

  const handler = (e: { key: string }) => {
    var input2 = null;
    if (/^[a-zA-Z]$/m.test(e.key)) {
      input2 = e.key;
    } else {
      switch (e.key) {
        case " ":
          input2 = "{space}";
          break;

        case "Enter":
          input2 = "{enter}";
          break;

        case "Backspace":
          input2 = "{bksp}";
          break;

        case null:
          return;
      }
    }

    checkInput(input2, "phs");
  };
  useEventListener("keydown", handler);

  const renderGss = guesses.map((g) => {
    return <GameViewGuess guessText={g} class="no" key={g} />;
  });

  const checkInput = (input: string | null, mode: string | null) => {
    if (logging)
      console.log(
        `%c
A input:   '${input}'
A mode:    '${mode}'
A current: '${current}'`,
        "color: red"
      );

    if (correct) return;
    if (input === "{enter}") {
      // TODO Replace with list from mapple-back
      let countries: string[] = require("../../resource/countrylist.json").map(
        (country: string) => country.toUpperCase()
      );

      if (current.toUpperCase() === answer.toUpperCase()) {
        setCorrect(true);
      } else if (countries.includes(current.toUpperCase()) || !conly) {
        guesses.push(current)
        setCurrent("");

        if (hintIndex === hints.length) {
          setHint("You ran out of hints.");
        } else {
          var hint = document.querySelector(".GameView-hint");
          hint!.className = "GameView-hint GameView-hintblur";

          setTimeout(() => {
            hint!.className = "GameView-hint";
            setHintIndex(hintIndex + 1);
            setHint(hints[hintIndex]);
          }, 500);
        }
      } else {
        // TODO have popup alert or box shake or something instead
        // I can add that - WAC
        setCurrent(nac);

        var box = document.querySelector(".GameView-box-guess");
        box!.className = "GameView-box-guess GameView-box-nac";
        setTimeout(() => {
          box!.className = "GameView-box-guess";
        }, 1000);
      }
    } else if (input === "{clear}") {
      setCurrent("");
    } else if (input === "{space}") {
      setCurrent(current + " ");
    } else if (input === "{bksp}") {
      setCurrent(current.substring(0, current.length - 1));
    } else if (/^[a-zA-Z]$/m.test(input as string)) {
      if (current === nac) {
        setCurrent(current + input?.toLowerCase());
      } else {
        setCurrent(current + input?.toLowerCase());
      }
    }

    if (logging)
      console.log(`
B input:   '${input}'
B mode:    '${mode}'
B current: '${current}'`);
  };

  // TODO FIX BKSP HANDLING
  // REASON FOR SWITCHING FOR COMMIT 6cd9e9a: NEED TO ADD REGULAR KEYPRESSES

  if (correct) {
    return (
      <div>
        <GameViewGuess guessText={current} class="yes" />
        {renderGss}

        <div className="GameView-mkwrap" onKeyDown={(e) => {}}>
          <MappleKeyboard onKeyPress={(e) => {}} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <GameViewHint hint={hint} />
        <GameViewGuess guessText={current} class="guess" />
        {renderGss}

        <div
          className="GameView-mkwrap" /*onKeyDown={
                    (e) => { checkInput }
                }*/
        >
          <MappleKeyboard onKeyPress={(i) => checkInput(i, "dig")} />
        </div>
      </div>
    );
  }
};
