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
			</header>
			<section className="GameView-boxes">
				<GameViewGuess content="type a guess" />
				<GameViewGuess content="type a guess" />
				<GameViewGuess content="type a guess" guess />
				<GameViewGuess content="type a guess" correct />
			</section>
		</div>

	);
}

export default GameView;
