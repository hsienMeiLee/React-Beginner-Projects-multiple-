import React from 'react'

const Score = ({score, onNextQuestion}) => {
  return (
    <div>
        <h2 className='font-medium text-gray-900 text-center mb-3'>Results </h2>
        <p>Your score : {score}</p>
    </div>
  )
}

export default Score