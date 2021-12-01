import { useState } from "react";

export default function AddMovie(props) {

    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault()
        console.log("Form was prevented to submit")
        props.parentCb(formState)
        setFormState({})
    }

    function handleInput(event){
        let {name, value, type, checked} = event.target
        if(type === "checkbox") value = checked
        setFormState(Object.assign({}, formState, {[name]: value}))
    }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input type='text' name="title" placeholder='Movie Title' value={formState.title || ''} onChange={handleInput}/>

        <label htmlFor='director'>Director:</label>
        <input type='text' name='director' placeholder='Director name' value={formState.director || ''} onChange={handleInput} />


        <label htmlFor='IMDBRating'>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={formState.IMDBRating || ''} onChange={handleInput} />

        <label htmlFor='hasOscars'>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={formState.hasOscars || ''} onChange={handleInput} />

        <br/>
       <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}
