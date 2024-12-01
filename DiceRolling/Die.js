import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons';


const Die = ({face, rolling}) => {
    const diceFaces = {
        one : faDiceOne,
        two : faDiceTwo,
        three : faDiceThree,
        four : faDiceFour,
        five : faDiceFive,
        six : faDiceSix,
    };
  return (
    <div>
        <FontAwesomeIcon icon={diceFaces[face]} className='size-60 m-5' />
    
    </div>

  )
}

export default Die