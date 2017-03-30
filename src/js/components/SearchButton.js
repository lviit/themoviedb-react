import React from 'react';
import css from '../../css/material-icons.pcss';
import Styles from '../../css/SearchButton.pcss';

const Search = (props) => <i className={Styles.button + ' material-icons'} onClick={props.toggleSearchBox.bind(this)}>search</i>

Search.propTypes = {
  toggleSearchBox: React.PropTypes.func,
};

export default Search
