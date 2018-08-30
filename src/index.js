import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 1. install redux packages: npm i redux react-redux redux-thunk redux-devtools-extension
// 2. wrap out app in a <Provider />
// 3. create a store, import it, and apply to Provider as a store prop
// GOTO ./store/index.js
