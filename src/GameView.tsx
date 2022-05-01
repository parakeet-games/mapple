import React from 'react';
import './GameView.css';
import './Main.css';

import GameViewGuess from './components/GameViewGuess/GameViewGuess';

const guess = ['', '', '', '', '', '']
const correctGuess = 'United Kingdom'

/* TODO: add this
setInterval(() => {
	guessBox = document.querySelector('.GameView-box-guess')
	if (guessBox.innerHTML != `<span>${guessBox.textContent}</span>`) {
		console.log('Pre')
		console.log(guessBox.innerText)
		console.log(guessBox.textContent)
		console.log(guessBox.innerHTML)
		
		if (guessBox.textContent.includes('\n')) {
			console.log('superb')
			guessBox.classList.remove('GameView-box-guess')
			guessBox.innerHTML = `<span>${guessBox.textContent}</span>`
			
			if (guessBox.textContent.equalsIgnoreCase('united kingdom')) guessBox.classList.add('GameView-box-correct')
			else guessBox.classList.remove('GameView-box-wrong')
		} else guessBox.innerHTML = `<span>${guessBox.textContent}</span>`
		
		console.log('Post')
		console.log(guessBox.innerText)
		console.log(guessBox.textContent)
		console.log(guessBox.innerHTML)
	}
}, 100) */

function GameView() {
  return (
    <div className="GameView">
      <header className="GameView-header">
        
      </header>
      <section className="GameView-boxes">
        <GameViewGuess content="aruba"/>
        <GameViewGuess content="jamaica"/>
        <GameViewGuess content="bermuda"/>
        <GameViewGuess content="bahama"/>
        <GameViewGuess content="key largo" guess/>
        <GameViewGuess content="kokomo" correct/>
      </section>
    </div>
  );
}

export default GameView;
