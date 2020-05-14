import React from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SelectionTraining from '../containers/SelectionTraining';
import '../assets/styles/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={SelectionTraining} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
