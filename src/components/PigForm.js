import React, {useState} from 'react'

function PigForm({onAddPig}) {

    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: false,
        weight: 0,
        highestMedalAcheived: "",
        image: ""
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:6001/hogs", configObj)
        .then(r => r.json())
        .then(formData => {
            onAddPig(formData)
            setFormData([])
        })
    }
  return (
    <div className='container'>
        <form className='add-pig-form' onSubmit={handleSubmit}>
            <h3>Add a Pig!</h3>
            <input
            type='text'
            name='name'
            value={formData.name}
            placeholder=" pig's name?"
            onChange={handleChange}
            className='input-text'
            />
           <br /> 
           <input
            type='text'
            name='image'
            value={formData.image}
            placeholder=" pig's image?"
            onChange={handleChange}
            className='input-text'
            />
           <br /> 
           <input
            type='text'
            name='specialty'
            value={formData.specialty}
            placeholder=" pig's specialty?"
            onChange={handleChange}
            className='input-text'
            />
           <br /> 
           <input
            type='text'
            name='greased'
            value={formData.greased}
            placeholder="True or False"
            onChange={handleChange}
            className='input-text'
            />
           <br /> 
           <input
            type='text'
            name='weight'
            value={formData.weight}
            placeholder=" pig's weight...?"
            onChange={handleChange}
            className='input-text'
            />
           <br /> 
           <input
            type='text'
            name='highestMedalAcheived'
            value={formData.highestMedalAcheived}
            placeholder=" pig's hma...?"
            onChange={handleChange}
            className='input-text'
            />
           <br /> 
           <input
            type='submit'
            name='submit'
            value="Add a new pig"
            
            className='input-text'
            />
           <br /> 
        </form>

    </div>
  )
}

export default PigForm

