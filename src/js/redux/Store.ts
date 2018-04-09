import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";
import { bindActionCreators } from "redux";
import DefaultState from "./DefaultState";
import * as actionCreators from "./Actions";
import * as reducers from "./Reducers";

const rootReducer = combineReducers({ ...reducers, routing: routerReducer });
const enhancers = compose(
  applyMiddleware(thunk),
  (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : f => f
);

const Store = createStore(rootReducer, DefaultState, enhancers);
export default Store;

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
