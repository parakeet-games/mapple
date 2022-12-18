import React, { useState } from 'react';
import './GameView.css';

import { GameViewBoxes } from './components/GameViewBoxes/GameViewBoxes';
import { ReactComponent as Continents } from './resource/continents-map.svg';

import days from "./resource/days.json";

function GameView() {
	console.log('%crerender GameView', 'color: blue')
	const [guesses, setGuesses] = useState<string[]>([])
	const updateGss = (newGuesses: string[]) => {
		setGuesses(newGuesses)
	}

	const [current, setCurrent] = useState("");

	var today = new Date()
	var todaystr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

	console.log(todaystr);
	console.log(Object.keys(days));

	var nation = days['2022-12-12']

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
					setGuesses={updateGss} hints={nation.slice(1)} answer={nation[0]} />
			</div>
		</>
	);
}

export default GameView;
