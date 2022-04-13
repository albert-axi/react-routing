import { useState, useEffect, useContext } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getMovieDetails } from "../utilities/utilities"
import { MovieContext } from "../contexts/MovieContext"

export default function MovieDetails() {
    const { movieTitle } = useParams()
    const [movie, setMovie] = useState(null) // [state, setterFunction]

    useEffect(() => {
        getMovieDetails(movieTitle)
        .then(data=>setMovie(data))
    }, [])


    return (
        <>
            <h1>{movieTitle} Details</h1>
            <p>Date Released: {movie?.Year}</p>
            <p>Writer: {movie?.Writers}</p>
            <p>Cast: {movie?.Actors}</p>
            <img src={movie?.Poster} alt={movieTitle} />
            <h3>Ratings</h3>
            {movie?.Ratings.map(rating => {
                return (
                    <p>{rating?.Source}: {rating?.Value}</p>
                )
            })}
        </>
    )
}