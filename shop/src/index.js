import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app';
import store from './app/state';
import * as serviceWorker from './serviceWorker';
import 'reset-css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
