import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Routes from './routes';
import './index.css'

ReactDOM.render(
    <div>
        <App />
        <Routes />
    </div>
    , document.getElementById('root')
);