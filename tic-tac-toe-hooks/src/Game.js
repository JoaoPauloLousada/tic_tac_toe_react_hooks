import React, { useState } from 'react'
import Board from './Board';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}// End Game

export default Game