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
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: null,
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
    apiConnect.Search(value).then(searchResults => {
      this.setState({
        searchResults,
      });
    });
  }

  handleClickOutside(e) {
    this.props.collapsed && this.props.toggleSearchBox();
  }

  submit(e) {
    console.log('submit');
    console.log(e);
  }

  render() {
    this.props.collapsed && this.textInput.focus();

    let searchBoxClasses = Classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed,
    });

    let resultContainerClasses = Classnames({
      [Styles.resultcontainer]: true,
      [Styles.noresults]: !this.state.searchResults,
      [Styles.collapsed]: this.props.collapsed,
      'container': true,
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
              ref={(input) => { this.textInput = input; }} />
          </form>
          <div className={resultContainerClasses}>
            {this.state.searchResults && this.state.genres && this.state.config &&
              <SearchResults
                results={this.state.searchResults}
                genres={this.state.genres}
                config={this.state.config}
                toggleSearchBox={this.props.toggleSearchBox}/>}
          </div>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  toggleSearchBox: React.PropTypes.func,
  collapsed: React.PropTypes.bool,
};

export default enhanceWithClickOutside(SearchBox)
