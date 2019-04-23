import * as React from 'react';
import { Provider } from 'mobx-react';
import App from './components/AppPresenter';
import { configureStore } from 'core';

export default () => (
  <Provider {...configureStore()}>
    <App />
  </Provider>
);
