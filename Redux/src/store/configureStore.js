import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //warns if change in state happens
import thunk from 'redux-thunk';

export default function configureStore(initialState){
return createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk, reduxImmutableStateInvariant()), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for redux extension
);
}