import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combinedReducer from './src/reducers';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import AppContainer from './src/containers/AppContainer';
import registerServiceWorker from './src/registerServiceWorker';

const appStore = createStore(
  combinedReducer,
  //
  // Instead of defining the app's initial state here, we define it (piece-by-piece) in the individual reducers.
  //
  undefined,
  //
  // Enable the use of the "Redux DevTools Extension" Chrome extension, if it is installed in the visitor's web browser.
  // Note: I am enabling it in this direct way---instead of by using the `redux-devtools-extension` npm package--in an
  // attempt to facilitate disabling it, should I eventually choose to.
  //
  // Reference: https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  //
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={appStore}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
