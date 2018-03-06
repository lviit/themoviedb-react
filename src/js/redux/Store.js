import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import { BrowserHistory } from "react-router";
import { bindActionCreators } from "redux";
import * as actionCreators from "./Actions";
import * as reducers from "./Reducers";

const rootReducer = combineReducers({ ...reducers, routing: routerReducer });

const defaultState = {
  config: {
    images: {}
  },
  movies: {
    latest: []
  },
  genres: [],
  movieFullView: {
    details: {
      data: [],
      isLoading: false,
    },
    similarMovies: {
      data: [],
      isLoading: false,
    },
    reviews: {
      data: [],
      isLoading: false,
    },
    credits: {
      data: [],
      isLoading: false,
    }
  }
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//export const history = syncHistoryWithStore(BrowserHistory, store);

const Store = createStore(rootReducer, defaultState, enhancers);
export default Store;

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
