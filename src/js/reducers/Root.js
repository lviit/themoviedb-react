import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import config from './config';

const rootReducer = combineReducers({config, routing: routerReducer });

export default rootReducer;
