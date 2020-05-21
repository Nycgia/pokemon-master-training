import React from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from '../reducers';
import initialState from '../storage';
import '../assets/styles/App.css';

// Components
import Home from '../containers/Home';
import TrainingType from '../containers/TrainingType';
import SelectionDifficult from '../containers/SelectionDifficult';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState(), composeEnhancer());

const App = () => {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/training" component={TrainingType} />
                    <Route exact path="/training/difficult" component={SelectionDifficult} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
