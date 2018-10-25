import React from 'react'

import './header.css';

const Header = () => {
    return (
        <div className="topnav" id="topnav">
            <a href="/">Home</a>
            <a href="/create">Create</a>
            <a href="/view">View</a>
        <span>Welcome to Application Manager</span>
        </div>
    );
}

export default Header;