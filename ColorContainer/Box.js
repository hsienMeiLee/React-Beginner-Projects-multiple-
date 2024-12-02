import React from 'react'

const Box = ({color, changeColor}) => {
  return (
    <div style={{background : color, height:'15.5rem'}} onClick={changeColor}>
    </div>
  )
}

export default Box