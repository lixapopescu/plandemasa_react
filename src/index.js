import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './reducers';
import routes from './routes';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
let store = createStore(reducers, compose(
  applyMiddleware(promise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
