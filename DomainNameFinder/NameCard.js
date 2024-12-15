import React from 'react'
const nameCheapUrl = 
"https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({suggestedName}) => {
  return (
    <a href={`${nameCheapUrl}${suggestedName}`} target='_blank' rel='noreferrer'>
        <div className='px-4 py-2 bg-gray-200 rounded-full text-center m-2'>
            <p>{suggestedName}</p>
        </div>
    </a>
  )
}

export default NameCard