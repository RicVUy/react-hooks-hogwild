import React from 'react'
import PigCard from './PigCard'


export default function PigContainer({hogs}) {

    const hogList = hogs.map((hog) => <PigCard key={hog.id}
    hog={hog} />)
  return (
    <div>{hogList}</div>
  )
}
