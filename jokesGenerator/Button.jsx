import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.callApi}>
        Click to generate jokes
    </button>
  )
}

export default Button