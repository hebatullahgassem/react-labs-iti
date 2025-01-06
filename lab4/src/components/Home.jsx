import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/favoritesSlice';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favoriteMovies);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=834b8842fd12d5f8c49bd6688d31fca4")
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    };

    const toggleFavorite = (movie) => {
        if (favorites.some(fav => fav.id === movie.id)) {
            dispatch(removeFromFavorites(movie));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div className='home'>
          <h2>Popular Movies</h2>
          <div className='movieList'>
            {movieList.map((movie) => (
                <div key={movie.id} className='movieCard'>
                    <Link to={`/movie-list/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </Link>
                    <div className='movie-info'>
                        <div>
                            <p className='title'>{movie.title}</p>
                            <p className='date'>{movie.release_date}</p>
                        </div>
                        <button 
                            className={`favorite-btn ${favorites.some(fav => fav.id === movie.id) ? 'filled' : 'bordered'}`}
                            onClick={() => toggleFavorite(movie)}
                        >
                            {favorites.some(fav => fav.id === movie.id) ? '★' : '☆'}
                        </button>
                    </div>
                </div>
            ))}
          </div>
        </div>
    );
};

export default Home;
