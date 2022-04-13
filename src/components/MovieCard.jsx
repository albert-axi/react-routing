import { useHistory, Link } from "react-router-dom"
import { useContext } from "react"
import { FavouritesContext } from "../contexts/FavouritesContext"

const MovieCard = ({ movieTitle, dateReleased, poster, imdbID }) => {

    const [favourites, setFavourites] = useContext(FavouritesContext)

    const isFavourite = () => favourites.some(m => m.movieTitle === movieTitle)

    const removeFromFavourites = () => {
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        fetch(`http://127.0.0.1:3000/favouriteMovies/${imdbID}`, configObj)
            .then(res => res.json())
            .then(data => setFavourites([
                ...favourites.filter(m=>m.movieTitle!==movieTitle)
            ]))
    }

    const addToFavourites = () => {
        const movie = {
            movieTitle,
            dateReleased,
            poster,
            id: imdbID
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(movie)
        }

        fetch("http://127.0.0.1:3000/favouriteMovies", configObj)
            .then(res => res.json())
            .then(data => {
                setFavourites(
                    [
                        ...favourites,
                        data
                    ]
                )
                alert(`You have added ${data.movieTitle} in your favourites`)
            })
    }

    return (

        <div
            className="movie-card"
            style={{
                backgroundColor: "grey",
                padding: "1em",
                marginBottom: "1em"
            }}
        // onClick={handleClick}
        >
            <Link to={`/movies/${movieTitle}`}>
                <img src={poster} alt={movieTitle} style={{
                    width: '100px',
                    border: 'solid 2px red'
                }} />
                <h3>
                    {movieTitle} - {dateReleased}
                </h3>
            </Link>
            {
                isFavourite() ?
                    <button onClick={removeFromFavourites}>Remove from favourites</button> :
                    <button onClick={addToFavourites}>Add to favourites</button>
            }


        </div>

    )
}

export default MovieCard