import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/app'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

