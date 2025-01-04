import React, { useEffect, useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


const Home = () => {

    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=834b8842fd12d5f8c49bd6688d31fca4")
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    }

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div className='home'>
          <h2>Popular Movies</h2>
          <div className='movieList'>
            {movieList.map((movie) => (
                <Link key={movie.id} to={`/movie-list/${movie.id}`} className='movieCard'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <div className='movie-info'>
                        <p className='title'>{movie.title}</p>
                        <p className='date'>{movie.release_date}</p>
                    </div>
                </Link>
            ))}
          </div>
        </div>
    );
}

export default Home;