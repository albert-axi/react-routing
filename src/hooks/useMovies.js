import { useState, useEffect } from "react";
import { searchMovie } from '../utilities/utilities'

function useMovies(movie) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    searchMovie(movie)
        .then(data => {
            setMovies(data.Search)
            setIsLoaded(true)
        })
  }, []);

  return {
    movies, isLoaded
  }
}

export default useMovies; 