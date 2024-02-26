import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";
import PigForm from "./PigForm";

function App() {

	const [hogs, setHogs] = useState([])

	useEffect(() => {
	  fetch("http://localhost:6001/hogs")
	  .then((r) => r.json())
	  .then((hogs) => setHogs(hogs))
	}, [])
	
console.log(hogs)

function handleAddPig(newPig){
	setHogs([...hogs, newPig])
}
	return (
		<>
		<div className="App">
			<Nav />
		</div>
		<PigContainer hogs={hogs}/>
		<PigForm onAddPig={handleAddPig}/>
		</>
	);
}

export default App;
