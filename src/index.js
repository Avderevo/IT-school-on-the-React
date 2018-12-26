import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Router, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {history, store} from './_helpers';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider >
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



