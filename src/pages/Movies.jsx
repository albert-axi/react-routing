import MovieList from '../components/MovieList';
import MovieCard from '../components/MovieCard';
import MovieForm from '../components/MovieForm';

const Movies = ({ movies, isLoaded }) => {
    console.log(movies)

    return (
        <>
            <h2>Movie List</h2>
            <MovieForm />
            {
                isLoaded ?
                    <MovieList>
                        {movies.map(movie => (
                            <MovieCard
                                key={movie.imdbID}
                                imdbID={movie.imdbID}
                                movieTitle={movie.Title}
                                dateReleased={movie.Year}
                                poster={movie.Poster}
                            />
                        )
                        )}
                    </MovieList> :
                    <h2>Loading Movies...</h2>
            }

        </>
    )
}

export default Movies