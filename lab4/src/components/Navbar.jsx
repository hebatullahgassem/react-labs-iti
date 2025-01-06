import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css';

const Navbar = () => {
    const favoritesCount = useSelector(state => state.favorites.favoriteMovies.length);

    return(
        <nav className='navbar'>
            <h2>Movie App</h2>
            <div>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Movie List
                </NavLink>
                <NavLink to="/watch-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Watch List
                </NavLink>
                <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Favorites {favoritesCount}
                </NavLink>
                <NavLink to="/Register" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Register
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
