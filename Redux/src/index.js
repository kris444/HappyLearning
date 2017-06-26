import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';

import configureStore from './store/configureStore';
import routes from './routes';

//bulndling css files into module (into bundlejs)
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} /></Provider>,
    document.getElementById('app')
);

