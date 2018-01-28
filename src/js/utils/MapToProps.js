import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
