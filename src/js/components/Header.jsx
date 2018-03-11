import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import Styles from '../../css/header.pcss';
import { withRouter } from 'react-router-dom';

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
              <li className={Styles.menuitem}>
                <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/">Latest</NavLink>
              </li>
              <li className={Styles.menuitem}>
                <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres/all">Genres</NavLink>
              </li>
              <li className={Styles.menuitem}>
                <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/about">About</NavLink>
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

export default withRouter(Header);
