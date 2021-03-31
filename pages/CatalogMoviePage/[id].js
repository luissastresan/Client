import React, { useState } from 'react'
import { useQuery } from '@apollo/client';

import NavBar from '../../components/NavBar/NavBar'
import QUERY_ALLDATAMOVIES from '../../queries/AllDataMovies.graphql';
import Comments from "../../components/Comments/Comments";
import StarRating from "../../components/StarRating/StarRating";
import { switchThemeDark } from '../../helpers/helpers'
import { switchThemeLight } from '../../helpers/helpers'
import { router } from '../../helpers/helpers'


export default function singleMoviePage() {
    const [rating, setRating] = useState(3);
    const { id } = router.query

    const { data, loading, error } = useQuery(QUERY_ALLDATAMOVIES, {
        pollInterval: 500
    });


    if (loading) {
        return <p>loading...</p>;
    }

    // check for errors
    if (error) {
        return <p>:( an error happened</p>;
    }

    const handleChange = (value) => {
        setRating(value);
    }


    const movie = data.movies.find(movie => movie._id === id)

    return (
        <div>
            <NavBar switchThemeDark={switchThemeDark} switchThemeLight={switchThemeLight} />
            <div className="info-container">
                <div className="movie-item-details">
                    {movie !== undefined ? <img src={movie.image} alt="" width="170" height="250" /> : null}
                    <div className="movie-infor">
                        {movie !== undefined ? <h3 className="time">{movie.title}</h3> : null}
                        {movie !== undefined ? <span className="time">{movie.productionYear}</span> : null}
                        {movie !== undefined ? <span className="time">{movie.director}</span> : null}
                        <div>
                            <StarRating
                                count={5}
                                size={40}
                                value={rating}
                                activeColor={'gold'}
                                inactiveColor={'#ddd'}
                                onChange={handleChange}
                                id={id}
                            />
                        </div>
                    </div>
                </div>
                {movie !== undefined ? <Comments id={id} comments={movie.comments} /> : null}
            </div>
            <style jsx global>{`
                :root {
                    --bg-color: white;
                    --primary-color: black;
                    --secondary-color: rgb(113, 128, 150);
                }

                [data-theme="dark"] {
                    --bg-color: #121212;
                    --primary-color: #f4f4f6;
                    --secondary-color: #8999b0;
                }

                body {
                    background: var(--bg-color);
                    transition: background 0.5s;
                }

                h1 {
                    color: var(--primary-color);
                }

                h3 {
                    color: var(--secondary-color);
                }
            `}</style>
            <style jsx>{`
                    .info-container {
                        display: flex;
                    }
                    .movie-item-details {
                        display:flex;
                    }
                    .movie-item-details img {
                        margin: 30px;
                    }
                    .movie-infor {
                        margin-top: 30px;
                        display: flex;
                        flex-direction: column;
                    }
                    .time {
                        margin-left: 5px;
                    }
                `}</style>
        </div>
    )
}