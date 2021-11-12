import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
    // Wrap App in BrowserRouter
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));