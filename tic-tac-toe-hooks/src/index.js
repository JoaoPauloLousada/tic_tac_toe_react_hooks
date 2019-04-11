import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = ({ number, ticTac, modifyTicTac }) => {
  const [state, setState] = useState({ value: number })

  const mark = () => {
    const newState = { ...state }
    newState.value = ticTac
    setState(newState)
    modifyTicTac(ticTac)
  }

  return (
    <button className="square" onClick={ mark }>
      { state.value }
    </button>
  );
}

const Board = () => {
  const [state, setState] = useState({ ticTac: 'X', squares: Array(9).fill(null)})

  const renderSquare = i => {
    return <Square number={ i } ticTac={ state.ticTac } modifyTicTac={ modifyTicTac }/>
  }

  const modifyTicTac = (value) => {
    const newState = { ...state }
    newState.ticTac = value === 'X' ? 'O' : 'X'
    setState(newState)
  }

  const status = `Next player: ${ state.ticTac }`

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
