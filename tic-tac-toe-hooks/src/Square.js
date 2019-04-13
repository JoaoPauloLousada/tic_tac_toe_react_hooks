import React, { useState } from 'react'

const Square = ({ number, handleClick }) => {
  return (
    <button className="square" onClick={ handleClick }>
      { number }
    </button>
  )
}// End Square

export default Square