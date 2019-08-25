import { routerReducer } from "react-router-redux";

import {
  AnyAction,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  compose,
  createStore,
  Dispatch
} from "redux";

import reduxThunk from "redux-thunk";
import * as actionCreators from "./Actions";
import DefaultState from "./DefaultState";
import * as reducers from "./Reducers";

const rootReducer = combineReducers({ ...reducers, routing: routerReducer });
const enhancers = compose(
  applyMiddleware(reduxThunk),
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
);

const Store = createStore(rootReducer, DefaultState, enhancers);
export default Store;

export function mapDispachToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(actionCreators, dispatch);
}
