import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

const initialState = {};
const middleware = [
    thunk
];
const enhancers = applyMiddleware(...middleware);

export default createStore(
    rootReducer, 
    initialState, 
    enhancers
);

