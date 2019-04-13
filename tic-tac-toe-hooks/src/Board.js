import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [state, setState] = useState({ ticTac: 'X', squares: Array(9).fill(null)})

  const handleClick = value => {
    const newState = { ...state }
    newState.squares[value] = newState.ticTac
    newState.ticTac = state.ticTac === 'X' ? 'O' : 'X'
    setState(newState)
  }// End handleClick

  const renderSquare = i => {
    const { squares } = state

    return(
      <Square 
        number={ squares[i] }
        handleClick={ () => handleClick(i) }
      />
    )
  }// End renderSquare

  const renderBoard = () => {
    const winner = calculateWinner(state.squares)

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (state.ticTac)
    }

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
  }// End renderBoard

  return renderBoard()
}// End Board

/**
 * Função Auxiliar que calcula vencedor
 */
const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}// End calculateWinner

export default Board