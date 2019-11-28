import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from "redux";
import  * as reducers from "./store/reducers";
import { setTokenToDefaults } from './helper/auth';
import { setInterceptors } from './helper/interceptors';

setInterceptors();
setTokenToDefaults();

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(Application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
