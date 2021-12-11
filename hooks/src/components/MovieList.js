import React from 'react'
import MovieCard from'./MovieCard'
const MovieList = ({movies}) => {
    return (
        <div className="movie-liste">
            {
                movies.maps((el,i)=> <MovieCard film ={el} key={i} ></MovieCard>)
            }
            
        </div>
    )
}

export default MovieList

