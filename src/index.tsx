import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { historyReducer } from './store/history/reducers';
import { Provider } from 'react-redux';

import './index.css';
import {Routes} from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(historyReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
