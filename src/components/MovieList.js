import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {

  const [movies, setMovies] = useState(moviesDataJSON)
  const [filteredMovies, setFilteredMovies] = useState(moviesDataJSON)

  // const [state, setState] = useState({
  //  movies: moviesDataJSON,
  //  filteredMovies: moviesDataJSON
  // })
  
  function createMovie(body){
    body._id = parseInt(Math.random() * 10000)
    setMovies([body, ...movies])  // movies.concat([body])

  }

  function handleFilterMovies(letter){
    if(letter === "") {setFilteredMovies(movies)}
    else{
      setFilteredMovies(
        movies.filter(movie=>movie.title[0].toLowerCase() === letter.toLowerCase())
      )}
  }

  return (
    <div>
      <FilterMovies filterMovies={handleFilterMovies} />
      <AddMovie parentCb={createMovie} />

      {filteredMovies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
