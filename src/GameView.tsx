import React from 'react';
import './GameView.css';
import './Main.css';

import GameViewGuess from './components/GameViewGuess/GameViewGuess';
import { GameViewBoxes } from './components/GameViewBoxes/GameViewBoxes';

const guess = ['', '', '', '', '', '']
const correctGuess = 'india'

function GameView() {
	return (
		<div className="GameView">
			<header className="GameView-header">
			</header>
			<GameViewBoxes guess={correctGuess} />
		</div>

	);
}

export default GameView;
