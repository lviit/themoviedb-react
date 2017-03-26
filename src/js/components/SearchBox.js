import React from 'react';
import Classnames from 'Classnames';
import apiConnect from '../services/ApiConnect';
import SearchResults from './SearchResults';
import Styles from '../../css/SearchBox.pcss';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.query = this.query.bind(this);
    this.state = {
      searchResults: '',
    }
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => {
      this.setState({ config });
    });
    apiConnect.getGenres().then(genres => {
      this.setState({ genres });
    });
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
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <form onSubmit={this.submit}>
            <input className={Styles.input} type="text" onChange={this.query} />
          </form>
          {this.state.searchResults && this.state.genres && this.state.config && <SearchResults results={this.state.searchResults} genres={this.state.genres} config={this.state.config} />}
        </div>
      </div>
    );
  }
}

export default SearchBox
