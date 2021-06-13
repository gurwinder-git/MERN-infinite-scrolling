import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    return (
        <nav>
            <h3 className="logo"><a href="/">infinite-Search</a></h3>
            <div className = "navlinks">
                <NavLink exact to = "/">Home</NavLink>
                <NavLink exact to = "/about">About</NavLink>
            </div>
        </nav>        
    )
}

export default Navbar
