import React from 'react'

const Coin = ({info}) => {
  return (
    <div>
        <img src={info.imgSrc} alt="image" className='w-[200px] h-[200px]' />
    </div>
  )
}

export default Coin