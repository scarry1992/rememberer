import { initialState } from './initialState'
import  { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from '../reducers'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
    const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore(initialState)