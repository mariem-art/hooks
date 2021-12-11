import React from 'react'
import Data from'./StarRating.js'

const Search = (text,rating,handelRating,handelChange) => {
    return (
        <div className="search">
            <h1>DarDarkom</h1>
            <div className="search-container">
                <form>
                    <input type="text" value={text} onChange={handelChange} placeholder="your movie"/>
                </form>
                <StarRating rating={rating} handelRating={handelRating}/>
            </div>
          </div>
    )
}
export default Search

