import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './temporary.css'

import App from './components/app'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import { throttle } from 'lodash';

import { loadState, saveState } from './components/localStorage';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const persistedState = loadState();
const store = createStoreWithMiddleware(reducers, persistedState)

store.subscribe(() => {
  saveState({
    ingredients: store.getState().ingredients
  });
});

store.subscribe(throttle(() => {
  saveState({
    ingredients: store.getState().ingredients
  });
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

