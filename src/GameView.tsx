import React, { useState } from 'react';
import './GameView.css';

import { GameViewBoxes } from './components/GameViewBoxes/GameViewBoxes';
import { ReactComponent as Continents } from './resource/continents-map.svg';

function GameView() {
	console.log('%crerender GameView', 'color: blue')
	const [guesses, setGuesses] = useState<string[]>([])
	const updateGss = (newGuesses: string[]) => {
		setGuesses(newGuesses)
	}

	const [current, setCurrent] = useState("");
	// Kenya
// Currency is the shilling
// Has a savannah
// Over 60 languages spoken (src)
// Coastal country in Africa
// Flag is black, red, green, and white

	var test1 = {
		name: 'kenya',
		hints: ['Currency is the shilling', 'Has a savannah', 'Over 60 languages spoken', 'Coastal country in Africa', 'Flag is black, red, green, and white']
	};

	return (
		<>
			<Continents style={{ width: '100vw', height: '100vh', position: 'fixed', opacity: 0.2, zIndex: -10000 }} />
			<div className="GameView">
				<header className="GameView-header">
					<h1>MAPPLE</h1>
				</header>
				<GameViewBoxes current={current}
					setCurrent={setCurrent}
					guesses={guesses}
					setGuesses={updateGss} hints={test1.hints} answer={test1.name} />
			</div>
		</>
	);
}

export default GameView;
