import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './components/Provider';
import Counter from './components/Counter3.js';
import { createStore } from './redux';
import reducer from './reducers/counter';
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
);
