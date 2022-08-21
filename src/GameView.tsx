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
	const [guesses, setGuesses] = useState<string[]>([])
	const updateGss = (newGuesses: string[]) => {
		setGuesses(newGuesses)
	}

	return (
		<div className="GameView">
			<header className="GameView-header">
			</header>
			<GameViewBoxes guesses={guesses} setGuesses={updateGss} />
		</div>

	);
}

export default GameView;
