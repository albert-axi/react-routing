export default function MovieList({children}){

    return(
        <>
            <h2>Movie List</h2>
            <div id="movie-list">
                {children}
            </div>
        </>
    )
}
