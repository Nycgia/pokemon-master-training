import React from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SelectionTraining from '../containers/SelectionTraining';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from '../reducers';
import '../assets/styles/App.css';

import pokeball from '../assets/images/pokeball.png';
import superball from '../assets/images/superball.png';
import ultraball from '../assets/images/ultraball.png';

const initialState = {
    "pokeballSelected": null,
    "pokeballs": [
        {
            id: 1,
            label: 'Pokeball',
            img: pokeball,
        },
        {
            id: 2,
            label: 'Superball',
            img: superball,
        },
        {
            id: 3,
            label: 'Ultraball',
            img: ultraball,
        },
    ]
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer());

const App = () => {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SelectionTraining} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
