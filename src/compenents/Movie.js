import React from 'react'
import './Movie.css'

const base_url = "https://image.tmdb.org/t/p/w500";
const defaultImage = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3440&q=80";

function Movie(props) {

    const { original_language,
        original_title,
        backdrop_path,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average } = props.data;
    let rating_color = vote_average <= 4 ? 'rating-red' : '' || vote_average < 7 ? 'rating-orange' : '' || vote_average >= 7 ? 'rating-green' : '';

    return (
        <div className="movie-container">
            <div className="movie-block">

                <img src={poster_path ? base_url + poster_path : defaultImage} alt={title}/>

                <div className="movie-info">
                    <span className="movie-title"> { title.length > 20 ? title.substring(0,20) + "..." : title } </span>
                    <span className={"movie-rating" + " " + rating_color}> {vote_average} </span>
                </div>
                <div className="movie-overview">
                    {
                        overview ?
                        (
                            <>
                                <h5 className="text-center pt-2">Overview</h5>
                                <p> {overview} </p>
                            </>
                        ) : 
                        <b>No overview available</b>
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie
