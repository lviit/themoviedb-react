import React from 'react';
import { IndexLink } from 'react-router';
import SearchBox from './SearchBox';
import Styles from '../../css/header.pcss';

class Header extends React.Component {
  constructor() {
    super();
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
    this.state = {
      toggleSearchBox: false,
    };
  }
  toggleSearchBox() {
    this.setState({ toggleSearchBox: this.state.toggleSearchBox === false });
  }
  render() {
    return (
      <div className="header-container">
        <div className={Styles.header}>
          <div className={Styles.navigation}>
            <button className={`${Styles.button} material-icons`} onClick={this.props.history.goBack}>arrow_back</button>
            <ul className={Styles.menu}>
              <li className={Styles.menulink}>
                <IndexLink activeClassName="active" to="/">Latest</IndexLink>
              </li>
              <li className={Styles.menulink}>
                <IndexLink activeClassName="active" to="/about">About</IndexLink>
              </li>
            </ul>
            <button className={`${Styles.button} material-icons`} onClick={this.toggleSearchBox}>search</button>
          </div>
        </div>
        <SearchBox collapsed={this.state.toggleSearchBox} toggleSearchBox={this.toggleSearchBox} />
      </div>
    );
  }
}

Header.propTypes = {
  history: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Header.defaultProps = {
  history: {},
};

export default Header;
