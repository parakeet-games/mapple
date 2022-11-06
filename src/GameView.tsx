import React, { useState } from 'react';
import './GameView.css';

import { GameViewBoxes } from './components/GameViewBoxes/GameViewBoxes';
import { ReactComponent as Continents } from './resource/continents-map.svg';

function GameView() {
	console.log("rerender GameView")
	const [guesses, setGuesses] = useState<string[]>([])
	const updateGss = (newGuesses: string[]) => {
		setGuesses(newGuesses)
	}

	const [current, setCurrent] = useState("");

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
				setGuesses={updateGss} hints={[
					"Green is not a creative color",
					"There's always time for a song.",
					"We must feed him gravel!",
					"Inside my mind, there is a digital mind!",
					"You're better off with plain white sauce!",
					"It's not very good at all!",
					"You can’t eat diamonds, can you?",
					"You laid an egg. Quick, make a wish!",
					"That's our family scent!",
					"Freelancers deserve to die!",
					"Choo choo, coming through...",
					"Come on in."]} answer="dominica" />
			</div>
		</>
	);
}

export default GameView;
