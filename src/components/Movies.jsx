import { useState } from "react";

const genres = ['animation', 'action', 'classic', 'comedy', 
'drama', 'horror', 'family', 'mystery']
function Movies() {
    const [movieList, setMovieList] = useState() //var movielist 
    const getMovies = (genre) => {
        fetch(`https://api.sampleapis.com/movies/${genre}`)
        .then(response => response.json())
        .then(setMovieList)
        .catch(console.error)
    }
    return(
        <>
        <div className="button-list">
            {genres.map(genre => (
                <button key={genre} onClick={() => getMovies(genre)}>
                    {genre.toUpperCase()}
                </button>
            ))}

        </div>
        <div className="movie-list">
            {!movieList
            ?<p>Pick a genre</p>
            : movieList.map(movie => ( //instead of 2 lines abouve we can put ? 
                <p key={movie.id}>{movie.title}</p>
            ))}

        </div>
        </>
    )


}

export default Movies