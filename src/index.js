import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter4';
import { Provider } from 'react-redux';
import store from './store2';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
);
