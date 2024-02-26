import React from 'react'

function PigCard({hog}) {

    const {  name, specialty, greased, weight, highestMedalAcheived, image} = hog
  return (
    <div className='pigTile'>
       <h2>{name}</h2>
       <img
       src={image}
       alt={name}
       className='pig-avatar'
         />
         <p>specialty: {specialty}</p>
         <p>weight: {weight}</p>
    </div>
  )
}

export default PigCard

