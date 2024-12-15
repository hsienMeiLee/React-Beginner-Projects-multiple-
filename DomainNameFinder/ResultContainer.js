import React from 'react'
import NameCard from './NameCard'

const ResultContainer = ({suggestedNames}) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName = {suggestedName} />
    })
  return (
    <div className='grid grid-cols-7 mt-5'>
        {suggestedNamesJsx}
    </div>
  )
}

export default ResultContainer