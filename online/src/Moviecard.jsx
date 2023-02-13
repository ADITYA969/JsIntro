import React from 'react'
// import '/movie'
import "./movieCard.css"
function Moviecard({title,producer,rating}) {
  return (
    <div className='movieCard'>
        <h1>{title}</h1>
        <img src="" alt="Movie Image"></img>
        <div className='movieFlex'>
        <p> {producer}</p>
        <p>{rating}</p>
        </div>
    </div>
  )
}

export default Moviecard