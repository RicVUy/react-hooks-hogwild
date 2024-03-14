import React from 'react'
import PigCard from './PigCard'


export default function PigContainer({hogs, onPigDelete, onUpdatePig}) {

    const hogList = hogs.map((hog) => <PigCard key={hog.id}
    hog={hog}  onPigDelete={onPigDelete} onUpdatePig={onUpdatePig}/>)
  
    return (
    <div className='card-container'>{hogList}</div>
  )
}
