import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
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
            </div>
        </nav>
    );
}

export default Navbar;