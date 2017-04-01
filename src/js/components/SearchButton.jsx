import React from 'react';
import Styles from '../../css/SearchButton.pcss';

const Search = props => <i className={`${Styles.button} material-icons`} onClick={props.toggleSearchBox.bind(this)}>search</i>;

Search.propTypes = {
  toggleSearchBox: React.PropTypes.func,
};

Search.defaultProps = {
  toggleSearchBox: () => null,
};

export default Search;
