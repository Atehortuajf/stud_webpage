import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Ensure this path matches where your Nav.css file is located

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* Add more navigation items here as needed */}
            </ul>
        </nav>
    );
};

export default Nav;
