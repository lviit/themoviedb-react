import React from 'react';
import { IndexLink } from 'react-router';
import BackButton from './BackButton';
import Search from './Search';
import SearchBox from './SearchBox';
import css from '../../css/header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
    this.state = {
      toggleSearchBox: false,
    }
  }
  toggleSearchBox() {
    this.setState({ toggleSearchBox: this.state.toggleSearchBox ? false : true });
  }
  render() {

    return (
      <div className="header-container">
        <div className="header">
          <div className="container navigation">
            <BackButton goBack={this.props.history.goBack} />
            <ul className="menu">
              <li className="menu--link"><IndexLink activeClassName="active" to='/'>Home</IndexLink></li>
              <li className="menu--link"><IndexLink activeClassName="active" to='/about'>About</IndexLink></li>
            </ul>
            <Search toggleSearchBox={this.toggleSearchBox}/>
          </div>
        </div>
        <SearchBox collapsed={this.state.toggleSearchBox}/>
      </div>
    );
  }
}

export default Header
