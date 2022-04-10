import React from 'react';
import './GameView.css';
import './Main.css';

function GameView() {
  return (
    <div className="GameView">
      <header className="GameView-header">
        
      </header>
      <section className="GameView-boxes">
        <div className="GameView-box GameView-box-no">WRONG</div>
        <div className="GameView-box GameView-box-no">WRONG</div>
        <div className="GameView-box GameView-box-no">WRONG</div>
        <div className="GameView-box GameView-box-no">WRONG</div>
        <div className="GameView-box GameView-box-no">WRONG</div>
        <div className="GameView-box GameView-box-yes">CORRECT</div>
      </section>
    </div>
  );
}

export default GameView;
