import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

export function mapStateToProps(state) {
  return {
    config: state.config,
  }
}

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
