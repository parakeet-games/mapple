import React, { useState } from 'react';
import './GameView.css';
import './Main.css';
// import { state } from './service/StateService';

import GameViewGuess from './components/GameViewGuess/GameViewGuess';
import { GameViewBoxes } from './components/GameViewBoxes/GameViewBoxes';
import { MappleKeyboard } from './components/MappleKeyboard/MappleKeyboard';

const guess = ['', '', '', '', '', '']
const correctGuess = 'india'

function GameView() {
	const [guesses, setGuesses] = useState(['brazil'])
	const updateGss = (newGuesses: string[]) => {
		setGuesses(newGuesses)
	}

	return (
		<div className="GameView">
			<header className="GameView-header">
			</header>
			<GameViewBoxes guesses={guesses} setGuesses={updateGuesses} />
			<MappleKeyboard
				guessText={guessText} setGuessText={setGuessText}
				onChange={function (input: any): void {
					setGuessText(input)
					console.log("Input changed", guess);
				}}

				onKeyPress={function (button: any): void {
					console.log("Button pressed", button);
				}} />
		</div>

	);
}

export default GameView;
