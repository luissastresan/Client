import { useQuery } from '@apollo/client';
import QUERY_MOVIES from '../../queries/MoviesQuery.graphql';
import Link from 'next/link'

import NavBar from '../../components/NavBar/NavBar'
import AverageStars from '../../components/AverageStars/AverageStars'
import { switchThemeDark } from '../../helpers/helpers'
import { switchThemeLight } from '../../helpers/helpers'




export default function CatalogMoviePage() {
    const { data, loading, error } = useQuery(QUERY_MOVIES);

    // make sure all data is loaded
    if (loading) {
        return <p>loading...</p>;
    }

    // check for errors
    if (error) {
        return <p>:( an error happened</p>;
    }

    // if all good return data
    return (
        <>
            <NavBar switchThemeDark={switchThemeDark} switchThemeLight={switchThemeLight}/>
            <div className="slider movie-items">
                <div className="container">
                    <div className="row">
                        {
                            data.movies.map(movie => (
                                <div  className="slick-multiItem">
                                    <div className="movie-item">
                                        <div className="mv-img">
                                            <Link href="/CatalogMoviePage/[id]" as={`/CatalogMoviePage/${movie._id}`}>
                                                <a><img src={movie.image} alt="" width="285" height="437" /></a>
                                            </Link>
                                        </div>
                                        <div className="title-in">
                                            <h6><a href="#">{movie.title}</a></h6>
                                            <AverageStars ratings={movie.ratings}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
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
                    .container {
                        width: 62%;
                    }

                    .slider {
                        text-align: center;
                        position: relative;
                        padding-top: 100px;
                        padding-bottom: 50px;
                        display: -webkit-flex;
                        display: -moz-box;
                        display: -ms-flexbox;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .slick-multiItem {
                        margin-right: 10px;
                    }
                    .mv-img a img {
                        transition: .2s;
                    }
                    .mv-img a img:hover {
                        transform: scale(1.1);
                    }
                    .slider .movie-item h6 {
                        text-transform: uppercase;
                        margin-top: 30px;
                    }
                    .slider .movie-item:hover h6 a {
                        color: #dcf836;
                    }
                    @media (max-width: 767px) {
                    .slider {
                        padding-bottom: 0;
                    }
                `}</style>
            </div>
        </>
    )
}