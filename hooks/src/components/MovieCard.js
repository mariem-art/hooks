import React from 'react'


const MovieCard = ({film}) => {
    return (
 
        <div className="movie-card">
            <StarRating rating={film.rating}/>
            <img src={film.image} alter="image film"/>
            <h2>{film.name}</h2>
            <p>{film.date}</p>
        </div>
    
    )
}
export default MovieCard
