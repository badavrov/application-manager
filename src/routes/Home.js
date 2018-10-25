import React from 'react';
import './home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div className="home_div">
            <h1> Welcome back Mr. Application Manager </h1>
            <a href="/create" className="regLink">Create new application!</a>
            <p>or</p>
            <a href="/view" className="regLink">View, edit and delete...</a>
            
            </div>
        );
    }
}
