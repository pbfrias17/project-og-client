import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Room from './containers/Room';
import Controller from './containers/Controller';

const App = () => (
    <div>
        <main>
            <Route exact path='/' component={Home} />
            <Route path='/room' component={Room} />
            <Route path='/controller' component={Controller} />
        </main>
    </div>
);

export default App;