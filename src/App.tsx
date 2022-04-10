import React, { useState } from 'react';
import './App.css';
import './Main.css';
import GameView from './GameView';
import { ReactComponent as Continents } from './resource/continents-map.svg';

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  if (gameStarted) {
    return <GameView />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Continents className='continents-map'></Continents>

        <h1>MAPPLE</h1>
        <button onClick={() => {
          setGameStarted(true)
        }}>GO!</button>
      </header>
    </div>
  );
}

export default App;
