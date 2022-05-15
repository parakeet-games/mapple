import React from 'react';
import './GameView.css';
import './Main.css';

import GameViewGuess from './components/GameViewGuess/GameViewGuess';

const guess = ['', '', '', '', '', '']
const correctGuess = 'united kingdom'

function GameView() {
	return (
		<div className="GameView">
			<header className="GameView-header">
				{Date.now()}
			</header>
			<section className="GameView-boxes">
				<GameViewGuess content="type a guess" guess={correctGuess} />
			</section>
		</div>

	);
}

export default GameView;
