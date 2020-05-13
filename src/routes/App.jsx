import React from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../assets/styles/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
};

export default App;
