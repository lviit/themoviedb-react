import React from 'react';
import Classnames from 'Classnames';
import css from '../../css/search.css';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    console.log(this.props);

    let searchBoxClasses = Classnames({
      'searchbox': true,
      'collapsed': this.props.collapsed,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <input className="searchbox--input" type="text" value="fuu"/>
        </div>
      </div>
    );
  }
}

export default SearchBox
