import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserHistory } from 'react-router';

import rootReducer from '../reducers/root';

const defaultState = {
  config: {},
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

//export const history = syncHistoryWithStore(BrowserHistory, store);

export default store;
