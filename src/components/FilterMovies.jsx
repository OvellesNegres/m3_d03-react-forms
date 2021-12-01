import {useState} from "react"

export default function FilterMovies(props){
    const [letter, setLetter] = useState("")

    function handleSelect(event){
        setLetter(event.target.value)
        props.filterMovies(event.target.value)
        {/* setLetter((oldState)=>{
            props.filterMovies(letter)
            return letter
            })
        */}
    }

    return(
        <div className="FilterMovies">
        <label>Show movies by first letter:</label>
        <select value={letter} onChange={handleSelect}>
          <option selected value="">Show all</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
    )
}