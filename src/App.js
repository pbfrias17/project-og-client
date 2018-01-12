import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Room from './containers/Room';

const App = () => (
    <div>
        <main>
            <Route exact path='/' component={Home} />
            <Route path='/room' component={Room} />
        </main>
    </div>
);

export default App;