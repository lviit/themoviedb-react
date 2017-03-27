import React from 'react';
import Classnames from 'Classnames';
import {debounce} from 'throttle-debounce';
import apiConnect from '../services/ApiConnect';
import SearchResults from './SearchResults';
import Styles from '../../css/SearchBox.pcss';
import enhanceWithClickOutside from 'react-click-outside';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: '',
      collapsed: false,
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

  handleChange(e) {
    this.callAjax(e.target.value);
  }

  callAjax(value) {
        console.log(value);
    apiConnect.Search(value).then(searchResults => {
      this.setState({
        searchResults,
      });
    });
  }

  hideResults(e) {
    this.setState({
      //collapsed: false
    });
  }

  componentWillReceiveProps (nextProps) {
    console.log('will receive props');
    console.log(nextProps.collapsed);
    this.setState({
      collapsed: nextProps.collapsed,
    });
  }

  handleClickOutside() {
    console.log('click outside!');
    this.setState({
      collapsed: false
    });
  }

  submit(e) {
    console.log('submit');
    console.log(e);
  }

  render() {

    if (this.state.collapsed) {
      this.textInput.focus();
    }

    let searchBoxClasses = Classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.state.collapsed,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <form onSubmit={this.submit}>
            <input
              placeholder="Search for movie..."
              className={Styles.input}
              type="text"
              onChange={this.handleChange}
              onBlur={this.hideResults}
              ref={(input) => { this.textInput = input; }} />
          </form>
          {this.state.searchResults && this.state.genres && this.state.config && <SearchResults results={this.state.searchResults} genres={this.state.genres} config={this.state.config} collapsed={this.state.collapsed} />}
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(SearchBox)
