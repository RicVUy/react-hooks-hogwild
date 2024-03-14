import React, {useState} from 'react'

function PigCard({hog, onPigDelete, onUpdatePig}) {

    const {  id, name, specialty, greased, weight, highestMedalAchieved, image, likes} = hog
    const [updateLikes, setUpdateLikes] = useState(likes)
    const [selected, setSelected] = useState(null)
    function handleLikeClick(e) {
      e.preventDefault()
  
     setUpdateLikes(likes + 1)
  
      const configObj = {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({likes: updateLikes})
      }
      fetch(`http://localhost:6001/hogs/${id}`, configObj)
      .then(r => r.json())
      .then(updatedHog => onUpdatePig(updatedHog))
      // updateLikes = {likes}
      setUpdateLikes(updateLikes + 1)
    
    }
   function handleDeleteClick() {
    fetch(`http://localhost:6001/hogs/${id}`, {
      method: "DELETE"
    })
       onPigDelete(id)

   }
   function handleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

    return (
      <div className='card'>
      
    <div 
    onClick={()=>handleSelection(id)}
    >
     <h2>{name}</h2>
       <img
       src={image}
       alt={name}
       className='image-container'
         />
         <p>specialty: {specialty}</p>
         <p>weight: {weight}</p>
         <p>{likes} Likes </p>

        
      <button className="like-btn" onClick={handleLikeClick}>Like 
      </button>

         <button  className="del-btn" onClick={handleDeleteClick}>Remove this Piggy</button>
        </div>
        {selected === id ?
        <div className='content'>
         <h4>greased : {greased}</h4>
          <h4>highest medal: {highestMedalAchieved}</h4>
        </div> : null}
    </div>
  )
}

export default PigCard

