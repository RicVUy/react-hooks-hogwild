import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";
import PigForm from "./PigForm";

function App() {
    const [showform, setShowForm] = useState(false)
	const [hogs, setHogs] = useState([])
	
	useEffect(() => {
	  fetch("http://localhost:6001/hogs")
	  .then((r) => r.json())
	  .then((hogs) => setHogs(hogs))
	}, [])
	
console.log(hogs)
function handleClick() {
	setShowForm((showForm) => !showForm)
}

function handleAddPig(newPig){
	setHogs([...hogs, newPig])
}
function handleDeletePig(id) {
	const updatedPigs = hogs.filter(pig => pig.id !== id)
	setHogs(updatedPigs)
}
function handleUpdateLike(updatedPig) {
    const updatedPigs = hogs.map((hog) => {
      if (hog.id === updatedPig.id) {
        return updatedPig
       } else {
        return hog
       }
    })
    setHogs(updatedPigs)
  }
  
	return (
		<>
		<div className="App">
			<Nav />
			{showform ? <PigForm onAddPig={handleAddPig}/> : null}
			<div className="buttonContainer">
				<button onClick={handleClick}>Add a Pig</button>
			</div>
		</div>
         
      
        
		<PigContainer hogs={hogs} onPigDelete={handleDeletePig} 
		onUpdatePig={handleUpdateLike} />
		 
		
	
		</>
	);
}

export default App;
