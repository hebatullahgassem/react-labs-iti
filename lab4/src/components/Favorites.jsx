import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../features/favoritesSlice';
import '../App.css';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favoriteMovies);
    const dispatch = useDispatch();

    return (
        <div className='favorites'>
            <h2>My Favorite Movies</h2>
            <div className='movieListfav'>
                {favorites.length > 0 ? (
                    favorites.map(movie => (
                        <div key={movie.id} className='movieCard'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className='movie-info-fav'>
                                <p className='title'>{movie.title}</p>
                                <button 
                                    className='remove-btn'
                                    onClick={() => dispatch(removeFromFavorites(movie))}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No favorite movies added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;

