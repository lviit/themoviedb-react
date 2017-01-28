import React from 'react';
import Classnames from 'Classnames';
import apiConnect from '../services/ApiConnect';
import SearchResults from './SearchResults';
import css from '../../css/search.css';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.query = this.query.bind(this);
    this.state = {
      searchResults: '',
    }
  }

  query(e) {
    apiConnect.Search(e.target.value).then(searchResults => {
      this.setState({
        searchResults,
      });
    });
  }

  submit(e) {
    console.log('submit');
    console.log(e);
  }

  render() {
    let searchBoxClasses = Classnames({
      'searchbox': true,
      'collapsed': this.props.collapsed,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <form onSubmit={this.submit}>
            <input className="searchbox--input" type="text" onChange={this.query} />
          </form>
          {this.state.searchResults && <SearchResults results={this.state.searchResults} />}
        </div>
      </div>
    );
  }
}

export default SearchBox
